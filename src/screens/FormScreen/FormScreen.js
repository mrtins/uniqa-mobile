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
  const isNewQuestion = props.navigation.getParam('isNewQuestion');
  const pergunta = props.navigation.getParam('pergunta');

  const [titulo, setTitulo] = useState();
  const [text, setText] = useState();
  const [tags, setTags] = useState();
  const [loading, setLoading] = useState(false);

  submitPergunta = (titulo, descricao, tags) => {
    if (!titulo && !descricao && !tags) {
      return handleResponse("Preencha todos os campos", "warning")
    }

    setLoading(true);

    let splitTags = tags.split(',')
    let listTags = [];
    splitTags.map(tag => listTags.push({ nomeTag: tag }))

    const body = {
      pergunta: {
        titulo,
        pergunta: descricao,
        idUsuario: 1,
        dataPublicacao: new Date()
      },
      tags: listTags
    };


    api.post(`/perguntas/ask-question`, body).then(res => {
      handleResponse("Pergunta realizada", "success")
      return props.navigation.replace('Home');
    }).catch(err => handleResponse());

    setLoading(false);
  }

  submitResposta = (resposta) => {
    if (!resposta) {
      handleResponse("Preencha todos os campos", "warning")
    }

    setLoading(true);

    const body = {
      idPergunta: pergunta.id,
      idUsuario: 1,
      resposta,
      dataPublicacao: new Date()
    };

    return api.post(`/respostas`, body).then(res => {
      setLoading(false);
      handleResponse("Pergunta respondida", "success")
      return props.navigation.replace('Question', { pergunta });
    }).catch(err => handleResponse());
  }

  handleResponse = (string, type) => {
    setLoading(false);
    return Toast.show({
      text: string || "Ocorreu um erro inesperado!",
      buttonText: "Ok",
      type: type || "danger",
      duration: 3000
    });
  }

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <Spinner
          visible={loading}
          textContent={'Carregando...'}
          animation="fade"
          textStyle={{ color: '#fff' }}
        />

        <ScrollView>
          <View style={{ backgroundColor: '#EAEAEA', flex: 1 }}>
            <Content padder>
              <Form>
                {isNewQuestion ?
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
                  placeholder={isNewQuestion ? "Descreva sua pergunta aqui..." : "Digite sua resposta aqui..."} />

                {isNewQuestion ?
                  <Textarea
                    onChangeText={(tags) => setTags(tags)}
                    style={{ backgroundColor: '#fff', height: 40 }}
                    rowSpan={1}
                    bordered
                    placeholder="Tags: (java, spring, codigo)" />
                  : <></>
                }
              </Form>

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                <Button rounded light onPress={() => props.navigation.goBack()}>
                  <Text>Voltar</Text>
                </Button>
                <Button
                  style={{ backgroundColor: isNewQuestion ? '#64A6BD' : '#4BB543' }}
                  rounded
                  onPress={() => isNewQuestion ? submitPergunta(titulo, text, tags) : submitResposta(text)}
                >
                  <Text>{isNewQuestion ? "Perguntar" : "Responder"}</Text>
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