
const React = require('react-native');

const { StyleSheet, Platform } = React;

const primary = require('../../themes/variable').brandPrimary;

export default {
  links: {
    paddingTop: Platform.OS === 'android' ? 5 : 5,
    paddingBottom: Platform.OS === 'android' ? 5 : 5,
    paddingLeft: Platform.OS === 'android' ? 0 : 0,
    borderBottomWidth: Platform.OS === 'android' ? 1 : 1,
    borderBottomColor: '#64676C',
    position: 'relative',
  },
  linkText: {
    paddingLeft: 15,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: (Platform.OS === 'ios') ? undefined : -30,
    marginBottom: 10,
  },
  rowHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingTop: Platform.OS === 'android' ? 7 : 0,
  },
  sidebarSearch: {
    flex: 1,
    height: Platform.OS === 'android' ? 35 : 35,
    paddingBottom: 0,
    marginTop: Platform.OS === 'android' ? 10 : 5,
    marginRight: Platform.OS === 'android' ? 5 : 15,
    marginLeft: Platform.OS === 'android' ? 25 : null,
    backgroundColor: '#282C35',
    borderRadius: 8,
    borderBottomWidth: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchBlock: {
    padding: 15,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchIcon: {
    fontSize: 20,
    color: '#8E9198',
  },
  placeholder: {
    height: Platform.OS === 'android' ? 45 : 33,
    color: '#8E9198',
    top: (Platform.OS === 'ios') ? undefined : -2,
  },
  settingsBtn: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
  },
  profileTextBlock: {
    marginTop: 5,
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  logoutContainer: {
    padding: 30,
  },
  logoutbtn: {
    paddingTop: 30,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#797979',
  },
  viewProfileLink: {
    color: '#5890FF',
    fontSize: 13,
  },
  discoverText: {
    color: '#676A6F',
    fontSize: 15,
  },
  arrowForward: {
    color: '#64676C',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  smallArrowForward: {
    color: '#64676C',
    position: 'absolute',
    fontSize: 25,
    right: 10,
    top: 10,
  },
  favHead: {
    backgroundColor: '#393C43',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  favText: {
    color: '#85868B',
    fontSize: 20,
  },
  online: {
    position: 'absolute',
    right: 10,
    top: 18,
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#64B117',
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary,
  },
  drawerContent: {
    paddingTop: Platform.OS === 'android' ? 0 : 30,
    backgroundColor: '#3F4045',
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === 'android' ? 40 : 20,
  },
};
