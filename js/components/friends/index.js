import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Left, Right, Body, Button, Title, List, ListItem, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { openDrawer, selectTab } from '../../actions/drawer';
import { HTTP, setItem, getItem } from '../helper/common';
import styles from './styles';


class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileId: 0,
      loading: true,
      message: null,
      profilesInfo: [],
      tab: 'friends',
    };

    this.callProfileApi = this.callProfileApi.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const user = this.props.user;
    const userId = user.user.userId;
    const tguid = user.user.tguid;
    this.callProfileApi(userId, tguid);
  }

  callProfileApi(userId, tguid) {
    const { profileId } = this.state;
    const uri = `api/profiles?userid=${userId}&profileId=${profileId}&tguid=${tguid}`;

    HTTP(uri, 'GET')
    .then(response => response.json())
    .then((responseData) => {
      if (responseData.constructor === Array) {
        setItem('reachedProfile', responseData.length);
        this.setState({ loading: false, profilesInfo: responseData });
      } else {
        this.setState({ loading: false, message: 'No profile found' });
      }
    })
    .done();
  }

  handleEdit(profile) {
    setItem('editProfileReqData', profile);
    // this.props.selectTab('addProfile');
  }

  render() {
    const profiles = this.state.profilesInfo.map(profile =>
      <ListItem key={profile.profileId}>
        <Left>
          <Text style={styles.name} key={profile.profileId}>{profile.firstName} {profile.lastName}</Text>
        </Left>
        <Right>
          <Button onPress={() => this.handleEdit(profile)} style={{ backgroundColor: '#fff' }}>
            <Icon name="pencil" size={20} />
          </Button>
        </Right>
      </ListItem>
    );
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.selectTab('homeContent')}>
              <Icon style={styles.backBtn} name="chevron-left" size={20} />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={styles.header}>Profiles</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.selectTab('addProfile')}>
              <Icon style={styles.addBtn} name="plus" size={20}/>
            </Button>
          </Right>
        </Header>

        { this.state.loading ?
          <Spinner color="#3B5998" /> :
          <Content style={styles.content}>
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
