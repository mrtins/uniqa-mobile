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

import LineView from 'components/utils/LineView';

const BottomInfo = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <LineView />
      <Grid style={{ paddingLeft: 10, paddingRight: 10, marginTop: 5, marginBottom: 5 }}>
        <Col size={2}>
          <View style={{ backgroundColor: 'blue', width: 40, padding: 10 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>{props.question.user.name.charAt(0)}</Text>
          </View>
        </Col>

        <Col size={6}>
          <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#64A6BD' }}>{props.question.user.name}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>{props.question.user.title}</Text>
            </View>
          </View>
        </Col>

        <Col size={4}>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#242729' }}>Perguntou em</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>{props.question.date}</Text>
            </View>
          </View>
        </Col>
      </Grid>
      <LineView />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default BottomInfo;