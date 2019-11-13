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

import AppContainer from 'components/AppContainer';
import QuestionContainer from 'components/QuestionContainer';
import BottomInfo from '../../components/BottomInfo';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Question = (props) => {
  tron.log(props)
  const question = props.navigation.getParam('question');
  tron.log(question)

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <QuestionContainer question={question} />

          <View style={{ marginTop: 20 }} />
          <BottomInfo question={question} />
          <ActionButton
            buttonColor="#377D96"
            position="center"
            size={42}
            offsetY={16}
            onPress={() => { console.log("hi") }}
          />
        </View>
      </AppContainer>
    </>
  );
}

export default Question;