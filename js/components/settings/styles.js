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
    top: 35,
    fontSize: 25,
  },
  largeDivider: {
    height: 40,
    borderTopWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderTopColor: '#C8C7CC',
    borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderBottomColor: '#C8C7CC',
  },
  section2: {
    backgroundColor: '#fff',
  },
  optionsContainer: {
    height: 60,
    width: deviceWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: (Platform.OS === 'ios') ? 30 : 25,
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  optionBlock: {
    height: 60,
    width: deviceWidth - 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderBottomColor: '#C8C7CC',
  },
  option: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionArrowForward: {
    color: '#BDC1C9',
    marginRight: 15,
    fontSize: 23,
  },
  bb0: {
    borderBottomWidth: 0,
  },
  bgBlue: {
    backgroundColor: '#126AFF',
  },
  bgRed: {
    backgroundColor: '#FF0013',
  },
  bgYellow: {
    backgroundColor: '#FFC400',
  },
  bgGreen: {
    backgroundColor: '#66D62F',
  },
  bgPink: {
    backgroundColor: '#FF0079',
  },
  bgNavyBlue: {
    backgroundColor: '#4E65A4',
  },
  bgLightGreen: {
    backgroundColor: '#7CDD28',
  },
  bgOrange: {
    backgroundColor: '#FF8D00',
  },
  bgGrey: {
    backgroundColor: '#999999',
  },
  content: {
    backgroundColor: '#F8F8F8',
    marginBottom: (Platform.OS === 'ios') ? 0 : undefined,
  },
};
