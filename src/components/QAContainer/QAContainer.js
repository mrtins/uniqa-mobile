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
} from 'native-base';

const QAContainer = (props) => {
  return (
    <Content style={{ backgroundColor: '#fff', marginBottom: 10 }}>
      <Grid>
        <Col size={2}>
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', top: 10 }}>
            <Icon name="arrow-up-drop-circle" type="MaterialCommunityIcons" style={{ color: '#bbc0c4' }} />
            <Text>{props.question.votes}</Text>
            <Icon name="arrow-down-drop-circle" type="MaterialCommunityIcons" style={{ color: '#bbc0c4' }} />
          </View>
        </Col>
        <Col size={10}>
          <View>
            <Text style={styles.questionTitle}>
              {props.question.title}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            {props.question.tags.map((tag, i) =>
              <View key={i} style={{ backgroundColor: '#64A6BD', padding: 3, borderRadius: 4, marginRight: 5 }}>
                <Text style={{ fontSize: 10, color: '#fff' }}>
                  #{tag.tag}
                </Text>
              </View>
            )}
          </View>


        </Col>
      </Grid>
    </Content>
  );
}

const styles = StyleSheet.create({
  questionTitle: {
    fontSize: 20,
    color: '#242729',
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'FascinateInline-Regular',
    textAlign: 'justify'
  }
});

export default QAContainer;