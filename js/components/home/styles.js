

const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  text: {
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
  },
  rowHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  col: {
    height: 50,
    width: deviceWidth / 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  topOptions: {
    color: '#484D51',
    marginTop: 10,
  },
  topIcons: {
    color: '#484D51',
  },
  searchInputGroup: {
    flex: 1,
    height: 40,
    backgroundColor: '#293E6B',
    borderRadius: 8,
    borderBottomWidth: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchIcon: {
    fontSize: 20,
  },
  inputBox: {
    height: 40,
  },
  sidebarIcon:{
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  btnHeader: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  contentView: {
    backgroundColor: '#D3D6DB',
    flex: 1,
  },
  detailsBlock: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderBottomWidth: 10,
    borderTopWidth: 10,
    borderColor: '#DDDEE3',

  },
  whatsOnMind: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 10,
  },
  navLinks: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLinkBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  navLinkIcons: {
    height: 17,
    width: 17,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  navLinkText: {
    marginLeft: 10,
    color: '#6A7181',
    fontSize: 15,
    textAlign: 'center',
  },
  nameText: {
    color: '#94979E',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  listViewBlock: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFE1',
    borderTopWidth: 1,
    borderTopColor: '#DFDFE1',
  },
  listItemView: {
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 0,
  },
  userName: {
    fontSize: 20,
    color: '#1B1C21',
    marginTop: 5,
  },
  content: {
    marginBottom: (Platform.OS === 'ios') ? 0 : undefined,
  },
  activeIcon: {
   color: '#3B5A94',
 },
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
