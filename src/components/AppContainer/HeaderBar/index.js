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

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.navigatorClick = this.navigatorClick.bind(this);
  }

  navigatorClick = () => {
    this.props.menu ?
      this.props.navigation.toggleDrawer() :
      this.props.navigation.goBack();
  }

  render() {
    return (
      <Header
        style={styles.container}
        androidStatusBarColor='#00A4C1'
      >
        <Left>
          <Button onPress={this.navigatorClick} transparent>
            {this.props.menu ? <Icon name='menu' /> : <Icon name='arrow-back' />}
          </Button>
        </Left>
        <Body>
          <Title style={{ textAlign: 'center' }}>{this.props.title}</Title>
        </Body>
        <Right style={{ paddingRight: 10 }}>
          <Icon name="md-mail" style={{ color: 'white' }} />
        </Right>
      </Header>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004F9F',
  }
});