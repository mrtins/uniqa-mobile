import tron from 'reactotron-react-native';

import React, { Component } from 'react';
import api from '../../../utils/api';
import storage from '../../../utils/storage';

import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';

import {
  Input
} from 'react-native-elements';

import {
  Container,
  Content,
  Button
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    this.login = this.login.bind(this);
    this.handleError = this.handleError.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  login() {
    return this.props.navigation.navigate('LoadingScreen');
  }

  handleError(err) {
    this.setLoading(false);

    if (err.error && err.error === 'invalid_credentials') {
      return this.setAlert('Usuário ou senha incorretos', 'Tente novamente.');
    } else {
      return this.setAlert();
    }
  }

  setAlert(title, msg) {
    Alert.alert(
      !title ? 'Ocorreu um erro' : title,
      !title ? 'Tente novamente' : msg,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel' },
      ],
      { cancelable: true }
    )
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    return (
      <Container>
        <ImageBackground source={loginBg} style={{ width: '100%', height: '100%' }}>
          <Content contentContainerStyle={{ justifyContent: 'center' }}>
            <Image
              source={loginLogo}
              style={{ flex: 1, alignSelf: 'center', resizeMode: 'center', width: '85%' }}
            />
          </Content>
          <Content contentContainerStyle={{ flex: 2, justifyContent: 'flex-end', marginBottom: 55 }}>
            <View style={styles.formInputView}>
              <Icon style={styles.inputIcon} name="user" />
              <Input
                placeholder="Matrícula"
                placeholderTextColor="grey"
                containerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={(matricula) => this.setState({ matricula })}
              />
            </View>

            <View style={styles.formInputView}>
              <Icon style={styles.inputIcon} name="key" />
              <Input
                secureTextEntry
                placeholder="Senha"
                placeholderTextColor="grey"
                containerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={(password) => this.setState({ password })}
              />
            </View>

            <View style={styles.btnContainer}>
              <Button onPress={this.login} />
            </View>

          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logoImage: {
    width: 340,
    height: 100,
    justifyContent: 'center',
    alignContent: 'center'
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
  },
  formInputView: {
    backgroundColor: 'rgba(204,237,253, 0.9)',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 40,
    marginLeft: 25,
    marginRight: 25
  },
  inputIcon: {
    padding: 10,
    paddingLeft: 20,
    color: '#3b5387',
    fontSize: 24,
  },
  inputContainerStyle: {
    flex: 1,
    paddingRight: 100,
    // textAlign: 'left',
  },
  inputStyle: {
    color: '#3b5387',
    fontFamily: 'Roboto',
    fontSize: 18,
    paddingLeft: 15,
  },
  btnContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
