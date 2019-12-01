import tron from 'reactotron-react-native';
import React, { useState, useEffect } from 'react';

import {
  View,
} from 'react-native';

import ActionButton from 'react-native-action-button';

import AppContainer from 'components/AppContainer';
import QuestionContainer from 'components/QuestionContainer';
import BottomInfo from '../../components/BottomInfo';
import AnswerContainer from '../../components/AnswerContainer/AnswerContainer';

import { answerList } from '../../utils/mock';
import { ScrollView } from 'react-native-gesture-handler';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import LineView from '../../components/utils/LineView'

import api from '../../utils/api';

const Question = (props) => {
  const pergunta = props.navigation.getParam('pergunta');

  const [listaRespostas, setListaRespostas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListRespostas();
  }, []);

  getListRespostas = () => {
    api.get(`/respostas/find-by-pergunta/${pergunta.id}`).then(data => {
      setLoading(false);
      setListaRespostas(data);
    }).catch(err => setLoading(false))
  }

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <ScrollView>
            <QuestionContainer pergunta={pergunta} />
            <BottomInfo content={pergunta} />
            <LineView />

            <View style={{ flex: 2 }}>
              {loading ? <LoadingSpinner /> : <></>}

            {listaRespostas.map((resposta, i) =>
                <AnswerContainer key={i} resposta={resposta} />
              )}
            </View>
          </ScrollView>

          <ActionButton
            buttonColor="#377D96"
            position="center"
            size={42}
            offsetY={16}
            onPress={() => { props.navigation.push('FormScreen', { question: false }) }}
          />
        </View>
      </AppContainer>
    </>
  );
}

export default Question;