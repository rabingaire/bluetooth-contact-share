const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceWidth = Dimensions.get('window').width;

export default {
  backBtn: {
    color: '#fff',
    fontSize: 24,
  },
  header: {
    color: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
  },
  notificationUntouched: {
    backgroundColor: '#fff',
  },
  textBlock: {
    flexWrap: 'wrap',
    width: deviceWidth - (45 + 70),
  },
  head: {
    fontSize: 16,
    marginBottom: 5,
  },
  message: {
    fontSize: 13,
    color: '#8C9099',
  },
  time: {
    fontSize: 13,
    color: '#8C9099',
    marginRight: 4,
    marginTop: 3,
  },
  content: {
    backgroundColor: '#fff',
    marginBottom: (Platform.OS === 'ios') ? 0 : undefined,
  },
};
