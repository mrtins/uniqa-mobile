import tron from 'reactotron-react-native';
import React, { useState } from 'react';

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

import { questionList } from '../../utils/mock';
import { ScrollView } from 'react-native-gesture-handler';

const Home = (props) => {
  const [fabActive, setFabActive] = useState(false);
  
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

          {questionList.map((question, i) =>
            <QuestionCard key={i} question={question} onPress={() => props.navigation.push('Question', { question })} />
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