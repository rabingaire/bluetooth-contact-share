import color from 'color';
import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import { closeDrawer } from './actions/drawer';

import Login from './components/login/';
import SignUp from './components/signUp/';
import Home from './components/home/';
import Profile from './components/profile/';
import Friends from './components/friends/';
import Notifications from './components/notifications/';
import Settings from './components/settings/';
import UserSettings from './components/userSettings/';
import UpdatePost from './components/updatePost/';
import NearbyFriends from './components/nearbyFriends/';
import BlankPage from './components/blankPage/';
import SideBar from './components/sideBar';
import AddProfile from './components/addProfile';
import { statusBarColor } from './themes/base-theme';

const statusBarClr = color('#3B5998').darken(0.3).hexString();

const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
  }


  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }

  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  render() {  // eslint-disable-line class-methods-use-this
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        onPress={() => {this._drawer.open()}}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
            flex: 1,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarClr}
          barStyle="light-content"
        />

        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar initial />
            <Scene key="signUp" component={SignUp} />
            <Scene key="home" component={Home} />
            <Scene key="homeContent" component={Home} />
            <Scene key="profile" component={Profile} />
            <Scene key="friends" component={Home} />
            <Scene key="notifications" component={Home} />
            <Scene key="chat" component={Home} />
            <Scene key="settings" component={Settings} />
            <Scene key="userSettings" component={UserSettings} />
            <Scene key="updatePost" component={UpdatePost} />
            <Scene key="nearbyFriends" component={NearbyFriends} />
            <Scene key="blankPage" component={BlankPage} />
            <Scene key="addProfile" component={AddProfile} />
          </Scene>
        </RouterWithRedux>

      </Drawer>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
