import tron from 'reactotron-react-native';
import React from 'react';

import {
  StyleSheet,
} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';

import TabList from '../../../routes/TabList';

const FooterTabs = (props) => {
  return (
    <Footer style={styles.footerStyle} >
      <FooterTab style={{backgroundColor: '#64A6BD'}}>
        {TabList.map((tab, i) =>
          <Button active={props.navigation.state.routeName === tab.routeName || props.stackedScreen === tab.routeName} onPress={() => props.navigation.navigate(tab.routeName)}>
            <Icon name={tab.icon} type={tab.iconType} style={{color: '#fff'}} />
          </Button>
        )}
      </FooterTab>
    </Footer>
  );
}

const styles = StyleSheet.create({
  footerStyle: {
    borderTopColor: '#c5c5c5',
    borderTopWidth: 1,
  }
});

export default FooterTabs;