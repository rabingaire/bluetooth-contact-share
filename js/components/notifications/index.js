import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Thumbnail, Header, Left, Button, Icon, Title, Right, Body, List, ListItem, Footer } from 'native-base';

import { openDrawer, selectTab } from '../../actions/drawer';

import data from './data';
import styles from './styles';

const chatContactsImg = require('../../../images/chatcontacts.png');


class Notifications extends Component {  // eslint-disable-line

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
            <Title style={styles.header}>Notifications</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Image source={chatContactsImg} style={{ resizeMode: 'contain', height: 30, width: 30 }} />
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>
          <List
            dataArray={data}
            renderRow={dataRow =>
              <ListItem button thumbnail style={{ paddingVertical: 0 }}>
                <Left>
                  <Thumbnail square size={70} source={dataRow.thumbnail} />
                </Left>
                <Body>
                  <Text style={styles.head}>{dataRow.post}</Text>
                  <Text style={styles.time}>{dataRow.time}</Text>
                </Body>
                <Right />
              </ListItem>
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


export default connect(mapStateToProps, bindAction)(Notifications);
