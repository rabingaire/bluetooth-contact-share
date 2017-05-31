const React = require('react-native');

const { StyleSheet, Platform } = React;

export default {
  backBtn: {
    color: '#fff',
    fontSize: 24,
  },
  header: {
    color: '#fff',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 2,
  },
  content: {
    marginBottom: (Platform.OS === 'ios') ? 0 : undefined,
  },
  inputGrp: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E3DA',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 20,
  },
  input: {
    color: '#566270',
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
