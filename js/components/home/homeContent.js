
import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Spinner } from 'native-base';
import { HTTP } from '../helper/common';
import { openDrawer } from '../../actions/drawer';

import styles from './styles';


class HomeContent extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      userid: null,
      profileId: 0,
      tguid: null,
      contactsInfo: [],
      loading: false,
      message: null,
    };

    this.callContactsApi = this.callContactsApi.bind(this);
  }

  componentWillMount() {
    const user = this.props.user;
    this.setState({
      loading: true,
      tguid: user.tguid,
      userid: user.userId,
    });
    this.callContactsApi();
  }

  callContactsApi() {
    const { userid, profileId, tguid } = this.state;
    const uri = `api/contacts?userid=${userid}&profileId=${profileId}&tguid=${tguid}`;

    HTTP(uri, 'GET')
    .then(response => response.json())
    .then((responseData) => {
      if (responseData.message === null) {
        this.setState({ loading: false, contactsInfo: responseData });
      } else {
        this.setState({ loading: false, message: 'No contacts found' });
      }
    })
    .done();
  }

  render() {
    const contacts = this.state.contactsInfo.map(contact =>
      <ListItem>
        <View style={styles.requestContainerInner}>
          <View>
            <Text style={styles.name}>{contact.nickName}</Text>
          </View>
        </View>
      </ListItem>
    );
    return (
      <Container>
        { this.state.loading ?
          <Spinner color="#3B5998" /> :
          <Content style={styles.content}>
            <View style={styles.requestContainer}>
              <Text style={styles.whiteRequest}>Your Contacts</Text>
            </View>
            <View style={styles.requestContainer}>
              { this.state.message === null ?
                <List>
                  {contacts}
                </List> :
                <Text style={styles.name}>{this.state.message}</Text>
              }
            </View>
          </Content>
        }
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
