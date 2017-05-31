import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Left, Right, Body, Button, Icon, Title, List, ListItem, Spinner } from 'native-base';
import { openDrawer, selectTab } from '../../actions/drawer';
import { HTTP } from '../helper/common';
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
      userid: null,
      profileId: 0,
      tguid: null,
      loading: false,
      message: null,
      profilesInfo: [],
      tab: 'friends',
    };

    this.callProfileApi = this.callProfileApi.bind(this);
  }

  componentWillMount() {
    const user = this.props.user;
    console.log(user);
    this.setState({
      loading: true,
      tguid: user.tguid,
      userid: user.userId,
    });
    console.log(this.state.userid);
    this.callProfileApi();
  }

  callProfileApi() {
    const { userid, profileId, tguid } = this.state;
    const uri = `api/profiles?userid=${userid}&profileId=${profileId}&tguid=${tguid}`;

    HTTP(uri, 'GET')
    .then(response => response.json())
    .then((responseData) => {
      console.log(responseData);
      if (responseData.message === null) {
        this.setState({ loading: false, profilesInfo: responseData });
      } else {
        this.setState({ loading: false, message: 'No profile found' });
      }
    })
    .done();
  }

  render() {
    const profiles = this.state.profilesInfo.map(profile =>
      <ListItem>
        <View style={styles.requestContainerInner}>
          <View>
            <Text style={styles.name}>{profile.firstname} {profile.lastName}</Text>
          </View>
        </View>
      </ListItem>
    );
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.selectTab('homeContent')}>
              <Icon style={styles.backBtn} name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={styles.header}>Profiles</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.selectTab('addProfile')}>
              <Icon style={styles.addBtn} name="add" />
            </Button>
          </Right>
        </Header>

        { this.state.loading ?
          <Spinner color="#3B5998" /> :
          <Content style={styles.content}>
            <View style={styles.requestContainer}>
              <Text style={styles.whiteRequest}>Profiles</Text>
            </View>
            <View style={styles.requestContainer}>
              { this.state.message === null ?
                <List>
                  {profiles}
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
    selectTab: newTab => dispatch(selectTab(newTab)),
  };
}

function mapStateToProps(state) {
  return {
    user:  state.user
  };
}


export default connect(mapStateToProps, bindAction)(Friends);
