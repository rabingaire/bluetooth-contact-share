import React, { Component } from 'react';
import { ListView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Button, Icon,
  Footer, FooterTab, Header, Input, Item } from 'native-base';

import NearbyFriends from '../nearbyFriends/';
import Friends from '../friends';
import HomeContent from './homeContent';
import Notifications from '../notifications';
import Chat from '../chat';
import Settings from '../settings';
import { openDrawer, selectTab } from '../../actions/drawer';

import styles from './styles';

class Home extends Component {  // eslint-disable-line

  static propTypes = {
    tabState: React.PropTypes.string,
    selectTab: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      tab: 'homeContent',
    };
  }

  render() {
    let tab = null;
    switch (this.props.tabState) {
      case 'homeContent':
        tab = <HomeContent />;
        break;
      case 'friends':
        tab = <Friends />;
        break;
      case 'notifications':
        tab = <Notifications />;
        break;
      case 'chat':
        tab = <Chat />;
        break;
      case 'settings':
        tab = <Settings />;
        break;
      case 'nearbyFriends':
        tab = <NearbyFriends />;
        break;
      default:
        tab = <HomeContent />;
    }
    return (
      <Container style={{ flex: 1 }}>
        {(!(this.props.tabState === 'friends') && !(this.props.tabState === 'nearbyFriends') && !(this.props.tabState === 'notifications') && !(this.props.tabState === 'chat') && !(this.props.tabState === 'settings')) &&
          <Header searchBar>
            <Item style={{ borderRadius: 6, backgroundColor: '#293F68' }}>
              <Icon name="search" style={{ color: '#fff' }} />
              <Input
                placeholderTextColor={'#fff'}
                placeholder="Search"
              />
            </Item>
            <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
              <Icon name="menu" style={{ color: '#fff' }} />
            </Button>
          </Header>
        }
        {tab}
        <Footer style={{ position: 'absolute', bottom: 0 }}>
          <FooterTab>
            <Button onPress={() => this.props.selectTab('homeContent')} >
              <Icon name="book" style={(this.props.tabState === 'homeContent') ? styles.activeIcon : undefined} />
            </Button>
            <Button onPress={() => this.props.selectTab('friends')}>
              <Icon name="people" style={(this.props.tabState === 'friends') ? styles.activeIcon : undefined} />
            </Button>
            <Button onPress={() => this.props.selectTab('chat')}>
              <Icon name="share" style={(this.props.tabState === 'chat') ? styles.activeIcon : undefined} />
            </Button>
          </FooterTab>
        </Footer>
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

export default connect(mapStateToProps, bindAction)(Home);
