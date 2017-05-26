import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Left, Right, Body, Button, Icon, Thumbnail, Title, List, ListItem, Footer } from 'native-base';


import { openDrawer, selectTab } from '../../actions/drawer';

import data from './data';
import styles from './styles';


class Friends extends Component {  // eslint-disable-line
  static propTypes = {
    tabState: React.PropTypes.string,
    selectTab: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      tab: 'friends',
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.selectTab('homeContent') }>
              <Icon style={styles.backBtn} name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={styles.header}>Friend Requests</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.addBtn} name="add" />
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.requestHead}>FRIEND REQUESTS</Text>
          <View style={styles.requestContainer}>
            <Text style={styles.whiteRequest}>No Friend Requests</Text>
          </View>
          <Text style={styles.requestHead}>PEOPLE YOU MAY KNOW</Text>
          <View style={styles.requestContainer}>
            <List
              dataArray={data}
              renderRow={dataRow =>
                <ListItem>
                  <View style={styles.requestContainerInner}>
                    <Thumbnail square style={{ height: 66, width: 66 }} size={75} source={dataRow.thumbnail} />
                    <View>
                      <Text style={styles.name}>{dataRow.name}</Text>
                      <Text style={styles.noOfMutualFriends}>{dataRow.friendsCount}</Text>
                      <View style={styles.actionButtonsBlock}>
                        <Button block style={styles.friendBtn1}>
                          <Text style={{ color: '#fff' }}>
                            Add Friend
                          </Text>
                        </Button>
                        <Button block bordered style={styles.friendBtn}>
                          <Text style={{ color: '#2874F0' }}>
                            Remove
                          </Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                </ListItem>
              }
            />
          </View>
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


export default connect(mapStateToProps, bindAction)(Friends);
