import tron from 'reactotron-react-native';
import React, { useState, useEffect } from 'react';

import {
  View,
  TouchableNativeFeedback
} from 'react-native';

import {
  Item,
  Input,
  Icon,
} from 'native-base';

import ActionButton from 'react-native-action-button';

import AppContainer from '../../components/AppContainer';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

import LoadingSpinner from '../../components/utils/LoadingSpinner';

import { questionList } from '../../utils/mock';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../utils/api';

const Home = (props) => {
  const [listaPerguntas, setListaPerguntas] = useState([]);

  useEffect(() => {
    getPerguntas();
  }, []);

  async function getPerguntas() {
    return api.get(`/perguntas`).then(perguntas => {
      return setListaPerguntas(perguntas);
    }).catch(err => tron.err(err));
  }

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" filter>
        <ScrollView>
          <View style={{ display: 'flex' }}>
            <View style={{ marginTop: 15, marginBottom: 10, paddingLeft: 20, paddingRight: 20, }}>
              <Item rounded style={{ backgroundColor: '#fff', height: 40 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                  <Icon name='search' type="MaterialIcons" />
                  <Input placeholder='Pesquisar' style={{ marginTop: 5 }} />
                </View>
              </Item>
            </View>
          </View>

          {listaPerguntas.length === 0 ?
            <LoadingSpinner /> : <></>
          }

          {listaPerguntas.map((pergunta, i) =>
            <QuestionCard key={i} pergunta={pergunta} onPress={() => props.navigation.push('Question', { pergunta })} />
          )}

        </ScrollView>
        <ActionButton
          buttonColor="#377D96"
          position="center"
          size={42}
          offsetY={16}
          onPress={() => { props.navigation.push('FormScreen', { question: true }) }}
        />
      </AppContainer>
    </>
  );
}

export default Home;