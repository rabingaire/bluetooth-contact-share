import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Container, Content, Text, Icon, List, Left, Right, Body, ListItem, Thumbnail, Item, Input, Button } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

import { closeDrawer } from '../../actions/drawer';
import styles from './style';
import { logout } from '../../actions/userActionCreator';

const profileImg = require('../../../images/profile.png');
const locationImg = require('../../../images/nearby.png');
const settingsDarkImg = require('../../../images/settings-dark.png');
const valentinoRossiImg = require('../../../images/Valentino-Rossi.png');
const rogerFedererImg = require('../../../images/Roger-Federer.png');
const ferrariImg = require('../../../images/ferrari.png');
const lamborghiniImg = require('../../../images/lamborghini.png');

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

  routeCall(data) {
    if (data === 'profile') {
      Actions.profile();
      this.props.closeDrawer();
    } else {
      Actions.nearbyFriends();
      this.props.closeDrawer();
    }
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

  render() {
    return (
      <Container>
        <Content style={styles.drawerContent}>
          {/*<View style={styles.header} >
            <View style={styles.rowHeader}>
              <Item style={styles.sidebarSearch}>
                <Icon name="search" style={styles.searchIcon} />
                <Input placeholder="Search" style={styles.placeholder} />
              </Item>
              <Button transparent>
                <Image source={settingsDarkImg} style={styles.settingsBtn} />
              </Button>
            </View>
          </View>*/}
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
          {/*<View style={styles.favHead}>
            <Text style={styles.favText}>FAVOURITES</Text>
            <Text style={styles.favText}>EDIT</Text>
          </View>*/}
          {/*<List foregroundColor={'white'} >*/}
            {/*<ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={valentinoRossiImg} />
              </ Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>Valentino Rossi</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <Icon name="phone-portrait" style={{ color: '#64676C' }} />
              </Right>
            </ListItem>*/}
            {/*<ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={rogerFedererImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>Roger Federer</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <View style={styles.online} />
              </Right>
            </ListItem>*/}
            {/*<ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={ferrariImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>Mr. Enzo Ferrari</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <View style={styles.online} />
              </Right>
            </ListItem>*/}
            {/*<ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={lamborghiniImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>Mr. Feruccio</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <Icon name="phone-portrait" style={{ color: '#64676C' }} />
              </Right>
            </ListItem>
            <ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={valentinoRossiImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>Valentino Rossi</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <Icon name="phone-portrait" style={{ color: '#64676C' }} />
              </Right>
            </ListItem>
            <ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={rogerFedererImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>Roger Federer</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <View style={styles.online} />
              </Right>
            </ListItem>
          </List>*/}
          {/*<View style={styles.favHead}>
            <Text style={styles.favText}>MORE FRIENDS (27)</Text>
          </View>
          <List foregroundColor={'white'} >
            <ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={valentinoRossiImg} />
              </ Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text>Valentino Rossi</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <Icon name="phone-portrait" style={{ color: '#64676C' }} />
              </Right>
            </ListItem>
            <ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={rogerFedererImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text style={styles.profileName}>Roger Federer</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <View style={styles.online} />
              </Right>
            </ListItem>
            <ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={ferrariImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text style={styles.profileName}>Mr. Enzo Ferrari</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <View style={styles.online} />
              </Right>
            </ListItem>
            <ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={lamborghiniImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text style={styles.profileName}>Mr. Feruccio</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <Icon name="phone-portrait" style={{ color: '#64676C' }} />
              </Right>
            </ListItem>
            <ListItem
              button
              thumbnail
              style={styles.links}
            >
              <Left>
                <Thumbnail square size={50} source={valentinoRossiImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text style={styles.profileName}>Valentino Rossi</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <Icon name="phone-portrait" style={{ color: '#64676C' }} />
              </Right>
            </ListItem>
            <ListItem
              button
              thumbnail
              style={{ ...styles.links, ...{ borderBottomWidth: 0 } }}
            >
              <Left>
                <Thumbnail square size={50} source={rogerFedererImg} />
              </Left>
              <Body style={{ borderBottomWidth: 0 }}>
                <Text style={styles.profileName}>Roger Federer</Text>
              </Body>
              <Right style={{ borderBottomWidth: 0, paddingLeft: 5 }}>
                <View style={styles.online} />
              </Right>
            </ListItem>
          </List>*/}
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
