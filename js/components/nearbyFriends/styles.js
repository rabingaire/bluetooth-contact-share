const React = require('react-native');

const { StyleSheet, Dimensions, Platform, PixelRatio } = React;

const deviceWidth = Dimensions.get('window').width;

export default {
  backBtn: {
    color: '#fff',
    fontSize: 24,
  },
  header: {
    color: '#fff',
  },
  nameContainer: {
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'relative',
  },
  userName: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  viewProfileText: {
    fontSize: 15,
    color: '#7F7F7F',
    marginLeft: 15,
  },
  arrowForward: {
    color: '#BDC1C9',
    position: 'absolute',
    right: 10,
    top: 25,
  },
  firstContainer: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
  },
  searchContainer: {
    flex: 2,
    borderRightWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderRightColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
  },
  searchIcon: {
    color: 'rgba(0,0,0,0.3)',
    fontSize: 25,
    marginTop: 8,
    marginLeft: 10,
  },
  inviteContainer: {
    flex: 1,
  },
  largeDivider: {
    height: 40,
    borderTopWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderTopColor: '#C8C7CC',
    borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderBottomColor: '#C8C7CC',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  smallDivider: {
    height: 40,
    borderTopWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderTopColor: '#C8C7CC',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  optionArrowForward: {
    color: '#BDC1C9',
    marginRight: 15,
  },
  content: {
    backgroundColor: '#F8F8F8',
    marginBottom: (Platform.OS === 'ios') ? 0 : undefined,
  },
};
