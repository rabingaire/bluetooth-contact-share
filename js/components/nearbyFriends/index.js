import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Right, Body, Content, Button, Icon, Thumbnail, Title, List } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import styles from './styles';
import data from './data';

const primary = require('../../themes/variable').brandPrimary;

const chatContactsImg = require('../../../images/chatcontacts.png');
const profileImg = require('../../../images/profile.png');
const lamborghini = require('../../../images/lamborghini.png');


class Settings extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }


  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon style={styles.backBtn} active name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={styles.header}>Nearby Friends</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Image source={chatContactsImg} style={{ resizeMode: 'contain', height: 30, width: 30 }} />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>

          <View style={styles.firstContainer}>
            <View style={styles.searchContainer}>
              <Icon name={'search'} style={styles.searchIcon} />
              <TextInput
                style={{ height: 40, borderWidth: 0, flex: 1, paddingLeft: 10, marginTop: 2, color: 'rgba(0,0,0,0.3)' }}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                placeholder="Nearby Friends"
                underlineColorAndroid="transparent"
                editable
              />
            </View>
            <View style={styles.inviteContainer}>
              <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Icon active name="people" style={{ color: primary, fontSize: 25, marginTop: 7 }} />
                <Text style={{ color: primary, fontSize: 16, marginLeft: 10, marginTop: 10 }}>Invite</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.largeDivider}>
            <Text>YOUR LOCATION</Text>
          </View>

          <TouchableOpacity style={styles.nameContainer}>
            <Thumbnail circle size={60} source={profileImg} />
            <View style={{ marginTop: 8 }}>
              <Text style={styles.userName}>Aditya Thakur</Text>
              <Text style={styles.viewProfileText}>BTM 2nd Stage</Text>
            </View>
            <Icon active name="options" style={styles.arrowForward} />
          </TouchableOpacity>

          <View style={styles.largeDivider}>
            <Text>NEARBY</Text>
          </View>

          <List
            dataArray={data}
            renderRow={dataRow =>
              <TouchableOpacity style={styles.nameContainer}>
                <Thumbnail circle size={60} source={dataRow.image} />
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.userName}>{dataRow.name}</Text>
                  <Text style={styles.viewProfileText}>{dataRow.note}</Text>
                </View>
                <Icon active name="hand" style={styles.arrowForward} />
              </TouchableOpacity>
              }
          />

          <View style={styles.smallDivider}>
            <Text style={{ alignSelf: 'center', color: 'rgba(0,0,0,0.3)' }}>See More</Text>
          </View>

          <View style={styles.largeDivider}>
            <Text>Friends Travelling</Text>
          </View>

          <TouchableOpacity style={styles.nameContainer}>
            <Thumbnail circle size={60} source={lamborghini} />
            <View style={{ marginTop: 8 }}>
              <Text style={styles.userName}>Ferrucio Lamborghini</Text>
              <Text style={styles.viewProfileText}>Italy, 1 day</Text>
            </View>
            <Icon active name="hand" style={styles.arrowForward} />
          </TouchableOpacity>
          <List
            dataArray={data}
            renderRow={dataRow =>
              <TouchableOpacity style={styles.nameContainer}>
                <Thumbnail circle size={60} source={dataRow.image} />
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.userName}>{dataRow.name}</Text>
                  <Text style={styles.viewProfileText}>{dataRow.note}</Text>
                </View>
                <Icon active name="hand" style={styles.arrowForward} />
              </TouchableOpacity>
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
