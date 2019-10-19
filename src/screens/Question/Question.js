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
} from 'native-base';

import ActionButton from 'react-native-action-button';

import AppContainer from '../../components/AppContainer';
import QAContainer from '../../components/QAContainer';

const Question = (props) => {
  tron.log(props)
  const question = props.navigation.getParam('question');

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" goBackMenu>
        <QAContainer question={question} isQuestion />
        {/* <QAContainer question={question} /> */}

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