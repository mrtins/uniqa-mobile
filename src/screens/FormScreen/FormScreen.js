import tron from 'reactotron-react-native';
import React, { useState } from 'react';

import {
  View,
} from 'react-native';

import { Textarea, Form, Content, Button, Text } from "native-base";

import AppContainer from 'components/AppContainer';
import { ScrollView } from 'react-native-gesture-handler';

const FormScreen = (props) => {
  const question = props.navigation.getParam('question');

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <ScrollView>
          <View style={{ backgroundColor: '#EAEAEA', flex: 1 }}>
            <Content padder>
              <Form>
                <Textarea style={{ backgroundColor: '#fff' }} rowSpan={8} bordered placeholder={props.question ? "Digite sua pergunta aqui..." : "Digite sua reposta aqui..."} />
                <Textarea style={{ backgroundColor: '#fff', height: 40 }} rowSpan={1} bordered placeholder="Tags: (java, spring, codigo)" />
              </Form>

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                <Button rounded light onPress={() => props.navigation.goBack()}>
                  <Text>Voltar</Text>
                </Button>
                <Button rounded style={{ backgroundColor: question ? '#64A6BD' : '#4BB543' }}>
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