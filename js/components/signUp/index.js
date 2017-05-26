import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Item, Input, Button, View } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import styles from './styles';
import { selectTab } from '../../actions/drawer';

const logo = require('../../../images/logo.png');

class SignUp extends Component {


  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      email: '',
      reenteremail: '',
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
          <View style={{ padding: 30, paddingTop: 20 }}>
            <Grid style={{ marginBottom: 10 }}>
              <Col style={{ paddingRight: 10 }}>
                <Item borderType="underline" style={styles.inputGrp}>
                  <Input
                    placeholder="First Name"
                    placeholderTextColor={'#fff'}
                    onChangeText={firstname => this.setState({ firstname })}
                    style={styles.input}
                  />
                </Item>
              </Col>
              <Col style={{ paddingLeft: 10 }}>
                <Item borderType="underline" style={styles.inputGrp}>
                  <Input
                    placeholder="Last Name"
                    placeholderTextColor={'#fff'}
                    onChangeText={surname => this.setState({ surname })}
                    style={styles.input}
                  />
                </Item>
              </Col>
            </Grid>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Email address"
                placeholderTextColor={'#fff'}
                onChangeText={email => this.setState({ email })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Re-enter email address"
                placeholderTextColor={'#fff'}
                onChangeText={reenteremail => this.setState({ reenteremail })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="New password"
                placeholderTextColor={'#fff'}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                style={styles.input}
              />
            </Item>
            <Button
              block
              style={styles.createBtn}
            >
              <Text style={{ lineHeight: 16, fontWeight: 'bold', color: 'rgba(255,255,255,0.5)' }}>CREATE</Text>
            </Button>
            <Button
              transparent
              onPress={() => Actions.pop()}
              style={{ alignSelf: 'flex-end' }}
            >
              <Text style={styles.forgotPassword}>
                      Sign In
              </Text>
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


export default connect(mapStateToProps, bindAction)(SignUp);
