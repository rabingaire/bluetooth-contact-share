import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Item, Input, Button, View } from 'native-base';

import styles from './styles';
import { selectTab } from '../../actions/drawer';

const logo = require('../../../images/logo.png');

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      tab: 'homeContent',
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
      selectTab: React.PropTypes.func,
      tabState: React.PropTypes.string,
    };
  }

  render() {
    return (
      <Container style={styles.background}>
        <Content>
          <Image source={logo} style={Platform.OS === 'android' ? styles.aShadow : styles.iosShadow} />
          <View style={{ padding: 40 }}>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Email or Phone"
                placeholderTextColor={'#fff'}
                onChangeText={username => this.setState({ username })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Password"
                placeholderTextColor={'#fff'}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                style={styles.input}
              />
            </Item>
            <Button
              block
              style={styles.loginBtn}
              onPress={() => { Actions.home(); this.props.selectTab('homeContent'); }}
            >
              <Text style={{ lineHeight: 16, fontWeight: 'bold', color: 'rgba(255,255,255,0.5)' }}>LOG IN</Text>
            </Button>
            <Button transparent style={{ alignSelf: 'center' }}>
              <Text style={styles.forgotPassword}>
                      Forgot Password?
                  </Text>
            </Button>
            <Button
              block bordered
              style={styles.createBtn}
              onPress={() => Actions.signUp()}
            >
              <Text style={styles.createBtnTxt}>CREATE NEW SOCIAL ACCOUNT</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    selectTab: newTab => dispatch(selectTab(newTab)),
  };
}
const mapStateToProps = state => ({
  tabState: state.drawer.tabState,
});

export default connect(mapStateToProps, bindAction)(Login);
