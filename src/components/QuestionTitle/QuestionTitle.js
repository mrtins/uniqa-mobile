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

const QuestionTitle = (props) => {
  return (
    <View style={{ display: 'flex', marginTop: 10 }}>
      <View style={{ flexDirection: 'row', paddingLeft: 15, paddingRight: 15 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', top: 10 }}>
          <Icon name="arrow-up-drop-circle" type="MaterialCommunityIcons" style={{ color: '#bbc0c4' }} />
          <Text>{props.question.votes}</Text>
          <Icon name="arrow-down-drop-circle" type="MaterialCommunityIcons" style={{ color: '#bbc0c4' }} />
        </View>

        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Row>
            <View style={{ marginLeft: 15, marginRight: 50, flexDirection: 'column' }}>
              <Text style={styles.questionTitle}>
                {props.question.title}
              </Text>
            </View>
          </Row>

          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Row>
              {props.question.tags.map((tag, i) =>
                <View key={i} style={{ backgroundColor: '#64A6BD', padding: 3, borderRadius: 4, marginRight: 5, height: 20 }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>
                    #{tag.tag}
                  </Text>
                </View>
              )}
            </Row>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 18,
    color: '#242729',
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'FascinateInline-Regular',
    textAlign: 'justify',

  }
});

export default QuestionTitle;