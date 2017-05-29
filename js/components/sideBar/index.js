import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content, Text, Icon, List, Left, Right, Body, ListItem, Thumbnail } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

import { closeDrawer } from '../../actions/drawer';
import styles from './style';
import { logout } from '../../actions/userActionCreator';

const profileImg = require('../../../images/profile.png');
const locationImg = require('../../../images/nearby.png');

const userData = [
  {
    thumbnail: profileImg,
    name: 'Aditya Thakur',
    content: 'View Profile',
    link: 'profile',
  },
  {
    thumbnail: locationImg,
    name: 'Aditya Thakur',
    content: 'Who is near you',
    link: 'nearbyFriends',
  },
];
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logout();
    Actions.login({
      type: ActionConst.RESET
    });
  }

  componentDidMount() {
    console.log('this is a props', this.props);
  }

  routeCall(data) {
    if (data === 'profile') {
      Actions.profile();
      this.props.closeDrawer();
    } else {
      Actions.nearbyFriends();
      this.props.closeDrawer();
    }
  }

  render() {
    return (
      <Container>
        <Content style={styles.drawerContent}>
          <List
            dataArray={userData}
            renderRow={userDataRow =>
              <ListItem
                button
                thumbnail
                onPress={() => this.routeCall(userDataRow.link)}
                style={styles.links}
              >
                <Left>
                  <Thumbnail square size={50} source={userDataRow.thumbnail} />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text style={styles.profileName}>{userDataRow.name}</Text>
                  <Text style={styles.viewProfileLink}>{userDataRow.content}</Text>
                </Body>
                <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                  <Icon name="arrow-forward" style={styles.arrowForward} />
                </Right>
              </ListItem>
            }
          />
          <View style={styles.favHead}>
            <Text style={styles.favText}>OPTIONS</Text>
          </View>
          <List foregroundColor={'white'} >
            <ListItem
              button iconLeft
              onPress={() => { Actions.userSettings(); this.props.closeDrawer(); }}
              style={styles.links}
            >
              <Icon name="settings" style={{ color: '#fff' }} />
              <Text style={styles.linkText}>SETTINGS</Text>
            </ListItem>
            <ListItem
              button iconLeft
              onPress={() => { Actions.home(); this.props.closeDrawer(); }}
              style={styles.links}
            >
              <Icon name="ios-grid-outline" style={{ color: '#fff' }} />
              <Text style={styles.linkText} >HOME</Text>
            </ListItem>
            <ListItem
              button iconLeft
              onPress={() => { Actions.blankPage(); this.props.closeDrawer(); }}
              style={styles.links}
            >
              <Icon name="ios-keypad-outline" style={{ color: '#fff' }} />
              <Text style={styles.linkText}>BLANK PAGE</Text>
            </ListItem>
            <ListItem
              button iconLeft
              onPress={() => { this.logoutUser(); this.props.closeDrawer(); }}
              style={styles.links}
            >
              <Icon name="power" style={{ color: '#fff' }} />
              <Text style={styles.linkText}>LOG OUT</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    logout: bindActionCreators(logout, dispatch)
  };
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, bindAction)(SideBar);
