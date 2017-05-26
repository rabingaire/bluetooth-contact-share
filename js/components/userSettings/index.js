
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Right, Body, Content, Button, Icon, Title, List } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import data from './data';
import theme from '../../themes/base-theme';
import styles from './styles';


class Settings extends Component {  // eslint-disable-line

  render() {
    return (
      <Container theme={theme}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon style={styles.backBtn} name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.header}>Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <List
            dataArray={data}
            renderRow={dataRow =>
              <View>
                <TouchableOpacity style={styles.section2}>
                  <View style={styles.optionsContainer}>
                    <View style={styles.iconContainer}>
                      <Icon name={dataRow.icon} style={styles.optionIcon} />
                    </View>
                    <View style={{ ...styles.optionBlock, ...{ borderBottomWidth: (dataRow.last) ? 0 : (1 / PixelRatio.getPixelSizeForLayoutSize(1)) } }}>
                      <Text style={styles.option}>{dataRow.name}</Text>
                      <Icon name="arrow-forward" style={styles.optionArrowForward} />
                    </View>
                  </View>
                </TouchableOpacity>
                {(dataRow.last) && <View style={styles.largeDivider} />}
              </View>
              }
          />

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

export default connect(null, bindAction)(Settings);
