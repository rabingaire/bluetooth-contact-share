
import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem } from 'native-base';
// import { HTTP } from '../helper/common';


import { openDrawer } from '../../actions/drawer';

import data from './data';
import styles from './styles';


class HomeContent extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
    console.log('this user props', this.props.user);
  }

  componentWillMount() {

  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <View style={styles.requestContainer}>
            <Text style={styles.whiteRequest}>Your Contacts</Text>
          </View>
          <View style={styles.requestContainer}>
            <List
              dataArray={data}
              renderRow={dataRow =>
                <ListItem>
                  <View style={styles.requestContainerInner}>
                    <View>
                      <Text style={styles.name}>{dataRow.name}</Text>
                      <Text style={styles.noOfMutualFriends}>{dataRow.friendsCount}</Text>
                    </View>
                  </View>
                </ListItem>
              }
            />
          </View>
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

function mapStateToProps(state) {
  return {
    user:  state.user
  };
}

export default connect(mapStateToProps, bindAction)(HomeContent);
