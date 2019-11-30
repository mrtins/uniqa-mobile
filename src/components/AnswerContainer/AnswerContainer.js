import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {
  Card,
  CardItem,
  Text,
  Grid,
  Col,
  Button,
  Icon,
  Content,
  Body,
  Container,
  Row
} from 'native-base';
import LineView from '../utils/LineView';

import BottomInfo from '../BottomInfo';

const AnswerContainer = (props) => {
  return (
    <View style={{ display: 'flex', marginTop: 20 }}>
      <View style={{ flexDirection: 'row', paddingLeft: 15, paddingRight: 15, marginBottom: 15 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', top: 10 }}>
          <Icon name="arrow-up-drop-circle" type="MaterialCommunityIcons" style={{ color: '#bbc0c4' }} />
          <Text>{props.resposta.likes ? props.resposta.likes : 0}</Text>
          <Icon name="arrow-down-drop-circle" type="MaterialCommunityIcons" style={{ color: '#bbc0c4' }} />
        </View>

        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Row>
            <View style={{ marginLeft: 15, marginRight: 50, flexDirection: 'column' }}>
              <Text style={styles.questionTitle} adjustsFontSizeToFit>
                {props.resposta.resposta}
              </Text>
            </View>
          </Row>
        </View>
      </View>
      
      <BottomInfo content={props.resposta} />
      <LineView />
    </View>
  );
}

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 14,
    color: '#242729',
    marginBottom: 5,
    textAlign: 'justify',
    fontFamily: 'Roboto'
  }
});

export default AnswerContainer;