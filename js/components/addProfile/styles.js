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
};
