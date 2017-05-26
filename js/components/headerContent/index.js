
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon, View, Button } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const headerLogo = require('../../../images/Header-Logo.png');

class HeaderContent extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }


  render() {
    return (
      <View style={styles.header} >
        <View style={styles.rowHeader}>
          <Button transparent style={styles.btnHeader} onPress={() => Actions.pop()}>
            <Icon name="arrow-back" />
          </Button>

          <Image source={headerLogo} style={styles.imageHeader} />
          <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
            <Icon name="menu" />
          </Button>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}


export default connect(null, bindAction)(HeaderContent);
