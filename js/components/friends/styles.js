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
  addBtn: {
    color: '#fff',
  },
  requestHead: {
    color: '#53565F',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  requestContainer: {
    backgroundColor: '#fff',
  },
  whiteRequest: {
    color: '#151821',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 15,
  },
  requestContainerInner: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 2,
  },
  noOfMutualFriends: {
    color: '#525463',
    marginLeft: 10,
  },
  actionButtonsBlock: {
    flexDirection: 'row',
  },
  friendBtn: {
    marginLeft: 10,
    height: 25,
    marginTop: 2,
  },
  friendBtn1: {
    marginLeft: 10,
    height: 25,
    marginTop: 2,
    backgroundColor: '#3B5A94',
  },
  content: {
    marginBottom: (Platform.OS === 'ios') ? 0 : undefined,
  },
};
