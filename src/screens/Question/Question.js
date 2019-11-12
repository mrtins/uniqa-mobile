import tron from 'reactotron-react-native';
import React, { useState } from 'react';

import {
  View,
  TouchableOpacity
} from 'react-native';

import {
  Item,
  Input,
  Icon,
  Col,
  Text,
  Grid
} from 'native-base';

import ActionButton from 'react-native-action-button';

import AppContainer from '../../components/AppContainer';
import QuestionTitle from '../../components/QuestionTitle';

import styles from './styles';

const Question = (props) => {
  tron.log(props)
  const question = props.navigation.getParam('question');
  tron.log(question)

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <QuestionTitle question={question} />
        <View style={{ marginTop: 25 }}>
          <Text>{question.description}</Text>
        </View>

        <ActionButton
          buttonColor="#377D96"
          position="center"
          size={42}
          offsetY={16}
          onPress={() => { console.log("hi") }}
        />

      </AppContainer>
    </>
  );
}

export default Question;