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
  Icon
} from 'native-base';

const HeaderBar = (props) => {
  navigatorClick = () => {
    props.menu ?
      props.navigation.toggleDrawer() :
      props.navigation.goBack();
  }

  return (
    <Header
      style={styles.container}
      androidStatusBarColor='#004F9F'
    >
      <Left>
        <Button onPress={navigatorClick} transparent>
          {props.goBack ? <Icon name='arrow-back' /> : null}
        </Button>
      </Left>
      <Body>
        <Title style={{ textAlign: 'center' }}>{props.title}</Title>
      </Body>
    </Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004F9F',
  }
});

export default HeaderBar;