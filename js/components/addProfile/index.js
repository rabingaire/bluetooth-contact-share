import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Body, Button, Title, Item, Input, Content, View, Text, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HTTP, getItem, removeItem } from '../helper/common';
import { addUser } from '../../actions/userActionCreator';
import { openDrawer, selectTab } from '../../actions/drawer';
import styles from './styles';


class AddProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'addProfile',
      profileId: null,
      userId: null,
      tguid: '',
      profileName: '',
      firstName: '',
      lastName: '',
      company: '',
      title: '',
      phoneOffice01: null,
      phoneOffice02: null,
      phoneMobileWork: null,
      phoneMobilePersonal: null,
      emailWork: '',
      emailPersonal: '',
      websiteWork: '',
      websitePersonal: '',
      linkedInUrl: '',
      googlePUrl: '',
      twitter: '',
      storeOnServer: true,
      privacy: 1,
      lastUpdated: '2017-04-23T04:45:14',
      loading: false,
      error: '',
    };
    this.callAddContactsApi = this.callAddContactsApi.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.isFormInValid = this.isFormInValid.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    const user = this.props.user;
    getItem('reachedProfile')
      .then((response) => {
        const profileId = response + 1;
        this.setState({ profileId });
      });
    this.setState({
      firstName: user.user.firstName,
      lastName: user.user.lastName,
      userId: user.user.userId,
      tguid: user.user.tguid,
    });
  }

  callAddContactsApi() {
    const { profileId,
            userId,
            tguid,
            profileName,
            firstName,
            lastName,
            company,
            title,
            phoneOffice01,
            phoneOffice02,
            phoneMobileWork,
            phoneMobilePersonal,
            emailWork,
            emailPersonal,
            websiteWork,
            websitePersonal,
            linkedInUrl,
            googlePUrl,
            twitter,
            storeOnServer,
            privacy,
            lastUpdated,
    } = this.state;
    const uri = `api/profiles?userId=${userId}&tguid=${tguid}&profileId=${profileId}`;

    const payload = {
      profileId,
      userId,
      tguid,
      profileName,
      firstName,
      lastName,
      company,
      title,
      phoneOffice01,
      phoneOffice02,
      phoneMobileWork,
      phoneMobilePersonal,
      emailWork,
      emailPersonal,
      websiteWork,
      websitePersonal,
      linkedInUrl,
      googlePUrl,
      twitter,
      storeOnServer,
      privacy,
      lastUpdated,
    }

    HTTP(uri, 'POST', payload)
    .then(response => response.json())
    .then((responseData) => {
      console.log(responseData);
      if (responseData.message === null) {
        this.setState({ loading: false });
        this.props.selectTab('friends');
      } else {
        this.setState({ loading: false, error: 'Something went wrong please try again' });
      }
    })
    .done();
  }

  handleOnPress() {
    if (this.isFormInValid()) {
      this.setState({ error: 'Profile name, company name and title on company cannot be empty!' });
    } else if (!this.isEmailValid()) {
      this.setState({ error: 'Email structure not valid' });
    } else if (this.state.profileId === 11) {
      this.setState({ error: 'There are already 10 profiles no more can be added !' })
    } else {
      this.setState({ loading: true, error: '' });
      this.callAddContactsApi();
    }
  }

  isFormInValid() {
    const { profileName, company, title } = this.state;
    return (profileName === '' || company === '' || title === '');
  }

  isEmailValid() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (re.test(this.state.emailWork) && re.test(this.state.emailPersonal));
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Button
          block
          style={styles.createBtn}
        >
          <Spinner color="#fff" />
        </Button>
      );
    }
    return (
      <Button
        block
        style={styles.createBtn}
        onPress={this.handleOnPress}
      >
        <Text style={{ lineHeight: 16, fontWeight: 'bold', color: 'rgba(255,255,255,0.5)' }}>SAVE</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.selectTab('friends')}>
              <Icon style={styles.backBtn} name="chevron-left" size={20} />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={styles.header}>Add Profile</Title>
          </Body>
        </Header>
        <Content>
          <View style={{ padding: 30, paddingTop: 20, marginBottom: 40 }}>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Enter profile name"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={profileName => this.setState({ profileName })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Enter company name"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={company => this.setState({ company })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Title on company"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={title => this.setState({ title })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Office phone number (1)"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={phoneOffice01 => this.setState({ phoneOffice01 })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Office phone number (2)"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={phoneOffice02 => this.setState({ phoneOffice02 })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Mobile phone work"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={phoneMobileWork => this.setState({ phoneMobileWork })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Mobile phone personal"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={phoneMobilePersonal => this.setState({ phoneMobilePersonal })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Email work"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={emailWork => this.setState({ emailWork })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Email personal"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={emailPersonal => this.setState({ emailPersonal })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Company website"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={websiteWork => this.setState({ websiteWork })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Personal website"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={websitePersonal => this.setState({ websitePersonal })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="LinkedIn url"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={linkedInUrl => this.setState({ linkedInUrl })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Google url"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={googlePUrl => this.setState({ googlePUrl })}
                style={styles.input}
              />
            </Item>
            <Item borderType="underline" style={styles.inputGrp}>
              <Input
                placeholder="Twitter"
                placeholderTextColor={'#566270'}
                autoCapitalize="none"
                onChangeText={twitter => this.setState({ twitter })}
                style={styles.input}
              />
            </Item>
            <Text style={styles.errorTypeStyle}>
              {this.state.error}
            </Text>
            { this.renderButton() }
          </View>
        </Content>
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
