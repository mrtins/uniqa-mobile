import tron from 'reactotron-react-native';
import React, { useState } from 'react';

import { View, Button } from 'react-native';

import {
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Text
} from 'native-base';

import AppContainer from '../../components/AppContainer';

const Home = (props) => {
  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A" headerMenu>
        <View>
          <View style={{ marginTop: 15, paddingLeft: 20, paddingRight: 20 }}>
            <Item rounded style={{ backgroundColor: '#fff' }}>
              <Input placeholder='Pesquisar' />
            </Item>
          </View>
        </View>

        <View style={{marginTop: 25}}>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Pergunta pergunta?
                  </Text>
                <Text style={{ fontSize: 12, fontWeight: '200' }}>
                  Descrição descrição
                  </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </AppContainer>
    </>
  );
}

export default Home;