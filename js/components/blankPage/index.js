import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
// import HeaderContent from './../headerContent/';

import styles from './styles';


const headerLogo = require('../../../images/Header-Logo.png');

class BlankPage extends Component { // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }


  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              style={styles.btnHeader}
              onPress={() => Actions.pop()}
            >
              <Icon name="arrow-back" />
            </Button></Left>
          <Body><Image source={headerLogo} style={styles.imageHeader} /></Body>
          <Right>
            <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content />
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}


export default connect(null, bindAction)(BlankPage);
