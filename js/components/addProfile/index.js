import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';
// import { HTTP } from '../helper/common';
import { openDrawer, selectTab } from '../../actions/drawer';
import styles from './styles';


class AddProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'addProfile',
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.selectTab('friends')}>
              <Icon style={styles.backBtn} name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={styles.header}>Add Profile</Title>
          </Body>
        </Header>
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
    user: state.user
  };
}


export default connect(mapStateToProps, bindAction)(AddProfile);
