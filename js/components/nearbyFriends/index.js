import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Right, Body, Content, Button, Icon, Thumbnail, Title, List, Spinner} from 'native-base';

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
            <Title style={styles.header}>Search Device</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Image source={chatContactsImg} style={{ resizeMode: 'contain', height: 30, width: 30 }} />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>

          <View style={styles.largeDivider}>
            <Text>Scan nearby device</Text>
          </View>

          <View style={styles.scannerContainer}>
            <Button style={styles.scannerButton}>
                <Icon name='home' style={{color: 'white', fontSize: 20, fontWeight: '800'}}/>
                <Text style={{color: 'white', fontSize: 20}}>Scan</Text>
                <Spinner color="#fff"/>
            </Button>
          </View>

          <View style={styles.largeDivider}>
            <Text>NEARBY</Text>
          </View>

          <View style={{flex: 1}}>
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
          </View>


          {/*<View style={styles.smallDivider}>
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
          />*/}

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
