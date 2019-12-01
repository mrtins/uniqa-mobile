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

import { formatarData } from '../../utils/date';

const BottomInfo = (props) => {
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Grid style={{ paddingLeft: 10, paddingRight: 10, marginTop: 0, marginBottom: 5 }}>
        <Col size={2}>
          <View style={{ backgroundColor: 'blue', width: 40, padding: 10 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>{props.content.usuario.nome.charAt(0)}</Text>
          </View>
        </Col>

        <Col size={6}>
          <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#64A6BD' }}>{props.content.usuario.nome}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>{props.content.usuario.titulo || "Calouro"}</Text>
            </View>
          </View>
        </Col>

        <Col size={4}>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#242729' }}>{props.content.resposta ? "Respondeu em" : "Perguntou em"}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 12 }}>{formatarData(props.content.dataPublicacao)}</Text>
            </View>
          </View>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default BottomInfo;