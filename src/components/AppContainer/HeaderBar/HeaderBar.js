import tron from 'reactotron-react-native';
import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  Text
} from 'native-base';

const HeaderBar = (props) => {
  goBackClick = () => {
    ;
  }

  return (
    <Header
      style={styles.container}
      androidStatusBarColor='#477687'
    >
      <Left>
        <Button onPress={() => props.navigation.goBack()} transparent>
          {props.goBack ? <Icon name='arrow-back' /> : null}
        </Button>
      </Left>
      <Body>
        <Title style={{ alignSelf: 'center' }}>{props.title}</Title>
      </Body>
      <Right>
        <Button onPress={null} transparent>
          {props.filter ? <Icon name='filter-variant' type="MaterialCommunityIcons" /> : null}
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#64A6BD',
  }
});

export default HeaderBar;