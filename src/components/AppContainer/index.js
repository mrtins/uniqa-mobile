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

export default class AppContainer extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBar navigation={this.props.navigation} title={this.props.headerTitle} menu={this.props.headerMenu} />

          {this.props.children}

        <FooterTabs navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF4FF',
  },
});