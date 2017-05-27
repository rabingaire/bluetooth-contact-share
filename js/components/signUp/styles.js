

const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

// const primary = require('../../themes/variable').brandPrimary;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  topSection: {
    height: (Platform.OS === 'IOS') ? deviceHeight / 3 : deviceHeight / 4,
    backgroundColor: '#3B5998',
  },
  iosShadow: {
    flex: 1,
    width: deviceWidth / 4,
    resizeMode: 'contain',
    height: deviceHeight / 4,
    alignSelf: 'center',
    marginTop: (deviceHeight / 18),
  },
  aShadow: {
    width: (deviceWidth / 4),
    height: (deviceWidth / 4),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: (deviceHeight / 18),
  },
  inputGrp: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.5)',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 20,
  },
  input: {
    color: 'rgba(255,255,255,0.5)',
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: '#3B5998',
  },
  bg: {
    flex: 1,
  },
  signUpBtn: {
    backgroundColor: '#4E69A2',
    borderRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
    height: 45,
    marginBottom: 15,
  },
  forgotPassword: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  createBtn: {
    backgroundColor: '#4E69A2',
    borderRadius: 0,
    marginTop: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  errorTypeStyle: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'red',
    margin: 10,
  },
};
