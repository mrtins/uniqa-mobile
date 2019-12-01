import tron from 'reactotron-react-native';
import React, { useState, useEffect } from 'react';

import {
  View,
} from 'react-native';

import { Textarea, Form, Content, Button, Text, Item, Label, Input, Toast } from "native-base";

import AppContainer from 'components/AppContainer';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';

import api from '../../utils/api';

const FormScreen = (props) => {
  const question = props.navigation.getParam('question');
  const [titulo, setTitulo] = useState();
  const [text, setText] = useState();
  const [tags, setTags] = useState();
  const [loading, setLoading] = useState(false);

  submitPergunta = (titulo, pergunta, tags) => {
    if (!titulo && !pergunta) {
      return Toast.show({
        text: "Preencha os campos de pergunta e descrição",
        buttonText: "Ok",
        type: "warning",
        duration: 3000
      });
    }

    setLoading(true);

    const body = {
      titulo,
      pergunta,
      idUsuario: 1,
      dataPublicacao: new Date()
    };

    return api.post(`/perguntas`, body).then(res => {
      setLoading(false);
      Toast.show({
        text: question ? "Pergunta realizada" : "Respondido",
        buttonText: "Ok",
        type: "success",
        duration: 3000
      });

      return props.navigation.replace('Home');
    }).catch(err => {
      setLoading(false)
      return Toast.show({
        text: "Preencha todos os campos!",
        buttonText: "Ok",
        type: "danger",
        duration: 3000
      });
    });
  }

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <Spinner
          visible={loading}
          textContent={'Carregando...'}
          animation="fade"
          textStyle={{color: '#fff'}}
        />

        <ScrollView>
          <View style={{ backgroundColor: '#EAEAEA', flex: 1 }}>
            <Content padder>
              <Form>
                {question ?
                  <Textarea
                    onChangeText={(titulo) => setTitulo(titulo)}
                    style={{ backgroundColor: '#fff', height: 40 }}
                    rowSpan={1}
                    bordered
                    placeholder="Qual sua pergunta?"
                  />
                  : <></>
                }
                <Textarea
                  onChangeText={(text) => setText(text)}
                  style={{ backgroundColor: '#fff' }}
                  rowSpan={8}
                  bordered
                  placeholder={question ? "Descreva sua pergunta aqui..." : "Digite sua reposta aqui..."} />
                <Textarea
                  onChangeText={(tags) => setTags(tags)}
                  style={{ backgroundColor: '#fff', height: 40 }}
                  rowSpan={1}
                  bordered
                  placeholder="Tags: (java, spring, codigo)" />
              </Form>

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                <Button rounded light onPress={() => props.navigation.goBack()}>
                  <Text>Voltar</Text>
                </Button>
                <Button onPress={() => submitPergunta(titulo, text, tags)} rounded style={{ backgroundColor: question ? '#64A6BD' : '#4BB543' }}>
                  <Text>{question ? "Perguntar" : "Responder"}</Text>
                </Button>
              </View>
            </Content>
          </View>
        </ScrollView>
      </AppContainer>
    </>
  );
}

export default FormScreen;