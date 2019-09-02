import tron from 'reactotron-react-native';
import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  StyleProvider
} from 'native-base';

import getTheme from '../../../../native-base-theme/components';
import unigranrio from '../../../../native-base-theme/variables/unigranrio';

import TabList from './TabList';

export default class FooterTabs extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyleProvider style={getTheme(unigranrio)}>
        <Footer style={styles.footerStyle}>
          <FooterTab>
            {TabList.map((tab, i) =>
              <Button active={this.props.navigation.state.routeName === tab.routeName || this.props.stackedScreen === tab.routeName} onPress={() => this.props.navigation.navigate(tab.routeName || 'ListEventsScreen')}>
                <Icon name={tab.icon} />
              </Button>
            )}
          </FooterTab>
        </Footer>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  footerStyle: {
    borderTopColor: '#c5c5c5',
    borderTopWidth: 1
  }
});