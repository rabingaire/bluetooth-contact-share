const React = require('react-native');

const { StyleSheet, Dimensions, Platform, PixelRatio } = React;

const primary = require('../../themes/variable').brandPrimary;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  logoHeader: {
    width: 20,
    height: 28,
    alignSelf: 'center',
  },
  rowHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingTop: Platform.OS === 'android' ? 7 : 0,
  },
  btnHeader: {
    paddingTop: Platform.OS === 'android' ? 5 : 10,
  },
  headerIcon: {
    lineHeight: 30,
    fontSize: 26,
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: 'contain',
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
  },
  header: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: (Platform.OS === 'ios') ? undefined : -30,
  },
  search: {
    flex: 1,
    height: 40,
    paddingBottom: 0,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: (Platform.OS === 'ios') ? undefined : 8,
    backgroundColor: '#293E6B',
    borderRadius: 8,
    borderBottomWidth: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchIcon: {
    fontSize: 20,
  },
  searchBox: {
    height: 40,
  },
  coverBlock: {
    height: deviceHeight / 3,
    width: deviceWidth,
    backgroundColor: '#000',
  },
  coverImage: {
    flex: 1,
  },
  profileImgBlock: {
    position: 'relative',
    width: deviceWidth,
  },
  profileImgBlockInner: {
    position: 'absolute',
    top: -(deviceWidth / 6),
    left: deviceWidth / 3,
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#ccc',
  },
  imgContainer: {
    flex: 1,
    position: 'relative',
  },
  profileImg: {
    resizeMode: 'cover',
    height: (deviceWidth / 3) - 10,
    width: (deviceWidth / 3) - 10,
  },
  editBlock: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 25,
    width: 60,
    backgroundColor: 'rgba(206,208,203,0.8)',
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 3,
  },
  editCam: {
    marginRight: 5,
    fontSize: 20,
    color: '#000',
  },
  editText: {
    color: '#000',
    fontSize: 15,
  },
  nameContainer: {
    marginTop: (deviceWidth / 6) + 15,
  },
  profileName: {
    fontSize: 25,
    lineHeight: 30,
    color: '#000',
    alignSelf: 'center',
  },
  userName: {
    fontSize: 20,
    lineHeight: 25,
    color: '#000',
    alignSelf: 'center',
  },
  pendingPostTextContainer: {
    padding: 10,
  },
  pendingPostText: {
    color: '#658ECE',
    alignSelf: 'center',
  },
  optionsContainer: {
    padding: 15,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderTopColor: '#F3F3F3',
    borderBottomColor: '#F3F3F3',
  },
  optionBlock: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  optionImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  option: {
    color: '#697080',
    marginTop: 10,
  },
  introBtnBlock: {
    padding: 15,
    paddingRight: 25,
    paddingLeft: 25,
  },
  introBtn: {
    borderColor: '#4169AF',
  },
  introIcon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    marginRight: 15,
    marginTop: 5,
  },
  introText: {
    color: '#4169AF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 25,
    paddingTop: 0,
    paddingBottom: (Platform.OS === 'ios') ? 25 : 50,
  },
  infoBlock: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  infoIcon: {
    height: 20,
    width: 20,
    marginTop: 2,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  infoIconSmall: {
    height: 15,
    width: 15,
    marginLeft: 5,
    marginTop: 1,
    resizeMode: 'contain',
  },
  infoText: {
    color: '#697080',
    marginLeft: 20,
  },
  nameContainer2: {
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'relative',
  },
  userName2: {
    color: 'rgba(0,0,0,0.7)',
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
  fullWidthImgContainer: {
    height: 300,
    backgroundColor: '#ccc',
  },
  fullWidthImg: {
    height: 300,
    width: null,
    flex: 1,
    resizeMode: 'cover',
  },
  commentContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  thumb: {
    color: primary,
    fontSize: 25,
  },

  footer: {
    height: 50,
    width: deviceWidth,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F6F7F9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderTopColor: '#DEDFE1',
  },
  footerBlocks: {
    width: deviceWidth / 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerMiddleBlock: {
    borderLeftWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderRightWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
    borderLeftColor: '#DEDFE1',
    borderRightColor: '#DEDFE1',
  },
  footerText: {
    color: '#505362',
  },
};
