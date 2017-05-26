import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Icon, ListItem, Header, Left, Right, Body, Title, Button, Thumbnail, List, Footer } from 'native-base';

import { openDrawer, selectTab } from '../../actions/drawer';

import data from './data';
import styles from './styles';

const chatContactsImg = require('../../../images/chatcontacts.png');

const profileImg = require('../../../images/profile.png');


class Settings extends Component {  // eslint-disable-line
  static propTypes = {
    tabState: React.PropTypes.string,
    selectTab: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      tab: 'notifications',
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.selectTab('homeContent')}>
              <Icon style={styles.backBtn} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.header}>Settings</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Image source={chatContactsImg} style={{ resizeMode: 'contain', height: 30, width: 30 }} />
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>

          <TouchableOpacity style={styles.nameContainer}>
            <Thumbnail square size={60} source={profileImg} />
            <View style={{ marginTop: 8 }}>
              <Text style={styles.userName}>Aditya Thakur</Text>
              <Text style={styles.viewProfileText}>View your Profile</Text>
            </View>
            <Icon name="arrow-forward" style={styles.arrowForward} />
          </TouchableOpacity>

          <View style={styles.largeDivider} />
          <List
            dataArray={data}
            renderRow={dataRow =>
              <TouchableOpacity style={styles.section2}>
                <ListItem
                  style={{ marginVertical: 7 }}
                  icon
                >
                  <Left>
                    <View style={{ ...styles.iconContainer, ...{ backgroundColor: dataRow.bg } }}>
                      <Icon name={dataRow.icon} style={{ ...styles.optionIcon, left: (dataRow.last) ? 8 : ((dataRow.divider) ? 3 : undefined) }} />
                    </View>
                  </Left>
                  <Body>
                    <Text style={styles.option}>{dataRow.name}</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" style={styles.optionArrowForward} />
                  </Right>
                </ListItem>
              </TouchableOpacity>
            }
          />

        </Content>
        <Footer />
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    selectTab: newTab => dispatch(selectTab(newTab)),
  };
}
const mapStateToProps = state => ({
  tabState: state.drawer.tabState,
});


export default connect(mapStateToProps, bindAction)(Settings);
