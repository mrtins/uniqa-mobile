import tron from 'reactotron-react-native';
import React, { useState } from 'react';

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
import LineView from '../../components/utils/LineView'

const Question = (props) => {
  const pergunta = props.navigation.getParam('pergunta');

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <ScrollView>
            <QuestionContainer pergunta={pergunta} />
            <BottomInfo content={pergunta} />
            <LineView />

            <View style={{ flex: 2 }}>
              <AnswerContainer resposta={answerList[0]} />
              <AnswerContainer resposta={answerList[0]} />
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