import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Left, Right, Body, Content, Button, Icon, Thumbnail, Title } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const chatContactsImg = require('../../../images/chatcontacts.png');
const profileImg = require('../../../images/profile.png');
const icon2 = { color: '#FE2742' };

class Settings extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { text: 'Whats on your mind?' };
  }
  render() {
    return (
      <Container theme={theme}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon active style={styles.backBtn} name="arrow-back" />
            </Button>
          </Left>
          <Body>

            <Title style={styles.header}>Update Status</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.pop()}>
              <Text style={styles.postBtn}>Post</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>

          <TouchableOpacity style={styles.nameContainer}>
            <Thumbnail square size={60} source={profileImg} />
            <View style={{ marginTop: 8 }}>
              <Text style={styles.userName}>Aditya Thakur</Text>
              <Text style={styles.viewProfileText}>Public</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginHorizontal: 5, backgroundColor: '#fff', padding: 10, borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)), borderBottomColor: '#C8C7CC' }}>
            <TextInput
              onChangeText={text => this.setState({ text })}
              placeholder={this.state.text}
              style={{ height: 160, borderWidth: 1, borderColor: '#C8C7CC', padding: 5, fontSize: 20, color: 'rgba(0,0,0,0.5)', textAlignVertical: 'top' }}
              editable
              multiline
              underlineColorAndroid="transparent"
              numberOfLines={10}
            />
          </View>

          <TouchableOpacity style={styles.section2}>
            <View style={styles.optionsContainer}>
              <View style={styles.iconContainer}>
                <Icon active name="camera" style={{ ...styles.optionIcon, ...{ color: '#89BD4F' } }} />
              </View>
              <View style={styles.optionBlock}>
                <Text style={styles.option}>Photo/Video</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section2}>
            <View style={styles.optionsContainer}>
              <View style={styles.iconContainer}>
                <Icon active name="videocam" style={{ ...styles.optionIcon, ...icon2 }} />
              </View>
              <View style={styles.optionBlock}>
                <Text style={styles.option}>Live Video</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section2}>
            <View style={styles.optionsContainer}>
              <View style={styles.iconContainer}>
                <Icon active name="pin" style={{ ...styles.optionIcon, ...icon2 }} />
              </View>
              <View style={styles.optionBlock}>
                <Text style={styles.option}>Check In</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section2}>
            <View style={styles.optionsContainer}>
              <View style={styles.iconContainer}>
                <Icon active name="happy" style={{ ...styles.optionIcon, ...{ color: '#F4C13B' } }} />
              </View>
              <View style={styles.optionBlock}>
                <Text style={styles.option}>Feeling/Activity</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section2}>
            <View style={styles.optionsContainer}>
              <View style={styles.iconContainer}>
                <Icon active name="people" style={{ ...styles.optionIcon, ...{ color: '#5691FE' } }} />
              </View>
              <View style={{ ...styles.optionBlock, ...{ borderBottomWidth: 0 } }}>
                <Text style={styles.option}>Tag Friends</Text>
              </View>
            </View>
          </TouchableOpacity>

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

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(Settings);
