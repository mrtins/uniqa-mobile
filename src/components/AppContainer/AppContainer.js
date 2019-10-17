import tron from 'reactotron-react-native';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Container,
  Content,
} from 'native-base';

import HeaderBar from './HeaderBar';
import FooterTabs from './FooterTabs';

const AppContainer = (props) => {
  return (
    <Container style={styles.container}>
      <HeaderBar navigation={props.navigation} title={props.headerTitle} menu={props.headerMenu} />
      <View style={{ flex: 1 }}>
        {props.children}
      </View>
      <FooterTabs navigation={props.navigation} />
    </Container>
  );
}

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
  },
});