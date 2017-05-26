import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Text, Item, Button, Icon, Input, Thumbnail, Grid, Col } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import styles from './styles';


const coverImg = require('../../../images/cover.png');
const profileImg = require('../../../images/profile.png');
const editPostImg = require('../../../images/edit-post.png');
const editAccInfImg = require('../../../images/edit-acc-inf.png');
const activityLogImg = require('../../../images/activity-log.png');
const moreImg = require('../../../images/more.png');
const workImg = require('../../../images/work.png');
const academicsImg = require('../../../images/academics.png');
const followingImg = require('../../../images/following.png');
const likeImg = require('../../../images/like.png');
const commentImg = require('../../../images/comment.png');
const shareImg = require('../../../images/share.png');

class Profile extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }


  render() {
    return (
      <Container>
        <Header searchBar>
          <Button
            transparent
            style={styles.btnHeader}
            onPress={() => Actions.pop()}
          >
            <Icon name="arrow-back" style={styles.headerIcon} />
          </Button>
          <Item style={{ marginHorizontal: 25, flex: 1.4, borderRadius: 6, backgroundColor: '#293F68', height: 35 }}>
            <Icon name="search" style={{ color: '#fff' }} />
            <Input placeholder="Aditya Thakur" placeholderTextColor={'#fff'} />
          </Item>
          <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
            <Icon active name="settings" style={styles.headerIcon} />
          </Button>
        </Header>
        <Content style={{ backgroundColor: '#fff', marginBottom: 50 }}>
          <View style={styles.coverBlock}>
            <Image source={coverImg} style={styles.coverImage} />
          </View>
          <View style={styles.profileImgBlock}>
            <View style={styles.profileImgBlockInner}>
              <View style={styles.imgContainer}>
                <Image source={profileImg} style={styles.profileImg} />
                <TouchableOpacity>
                  <View style={styles.editBlock}>
                    <Icon name="videocam" style={styles.editCam} />
                    <Text style={styles.editText}>Edit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.profileName}>Aditya Thakur</Text>
            <Text style={styles.userName}>(aditya.thakur.12327)</Text>
          </View>
          <View style={styles.pendingPostTextContainer}>
            <Text style={styles.pendingPostText}>42 Pending Posts</Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity transparent style={styles.optionBlock}>
              <Image source={editPostImg} style={styles.optionImg} />
              <Text style={styles.option}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity transparent style={styles.optionBlock}>
              <Image source={editAccInfImg} style={styles.optionImg} />
              <Text style={styles.option}>Update Info</Text>
            </TouchableOpacity>
            <TouchableOpacity transparent style={styles.optionBlock}>
              <Image source={activityLogImg} style={styles.optionImg} />
              <Text style={styles.option}>Activity Log</Text>
            </TouchableOpacity>
            <TouchableOpacity transparent style={styles.optionBlock}>
              <Image source={moreImg} style={styles.optionImg} />
              <Text style={styles.option}>More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.introBtnBlock}>
            <Button bordered block style={styles.introBtn}>
              <Icon name="color-wand" />
              <Text style={styles.introText}>Introduce Yourself</Text>
            </Button>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoBlock}>
              <Image source={workImg} style={styles.infoIcon} />
              <Text style={styles.infoText}>Software Engineer at Sahusoft</Text>
            </View>
            <View style={styles.infoBlock}>
              <Image source={academicsImg} style={styles.infoIcon} />
              <Text style={styles.infoText}>Studied at SJB Institute of Technology</Text>
            </View>
            <View style={styles.infoBlock}>
              <Image source={academicsImg} style={styles.infoIcon} />
              <Text style={styles.infoText}>Lives in Bangalore, India</Text>
            </View>
            <View style={styles.infoBlock}>
              <Image source={followingImg} style={styles.infoIconSmall} />
              <Text style={styles.infoText}>Followed by 300 people</Text>
            </View>
          </View>

          <View style={styles.nameContainer2}>
            <Thumbnail square size={60} source={profileImg} />
            <View style={{ marginTop: 8 }}>
              <Text style={styles.userName2}>Aditya Thakur in Coorg</Text>
              <Text style={styles.viewProfileText}>Friday at 12:00 PM</Text>
            </View>
          </View>

          <View style={styles.fullWidthImgContainer}>
            <Image source={coverImg} style={styles.fullWidthImg} />
          </View>
          <View style={styles.commentContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon active name={'thumbs-up'} style={styles.thumb} />
              <Text style={{ color: 'rgba(0,0,0,0.4)', marginLeft: 10 }}>Suraj and 48 others</Text>
            </View>
            <Text style={{ color: 'rgba(0,0,0,0.4)', marginTop: 15, marginLeft: 10 }}>3 Comments</Text>
          </View>

          <Grid style={{ paddingHorizontal: 10, paddingVertical: 13, borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)), borderBottomColor: 'rgba(0,0,0,0.3)', marginBottom: Platform.OS === 'ios' ? undefined : 50 }}>
            <Col style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={likeImg} style={{ resizeMode: 'contain', height: 15, width: 15, marginRight: 5, marginTop: Platform.OS === 'android' ? 1 : -2 }} />
                <Text style={{ color: '#9197A3', fontSize: 15, lineHeight: 15 }}>Like</Text>
              </TouchableOpacity>
            </Col>
            <Col style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={commentImg} style={{ resizeMode: 'contain', height: 15, width: 15, marginRight: 5, marginTop: Platform.OS === 'android' ? 3 : 0 }} />
                <Text style={{ color: '#9197A3', fontSize: 15, lineHeight: 15 }}>Comment</Text>
              </TouchableOpacity>
            </Col>
            <Col style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image source={shareImg} style={{ resizeMode: 'contain', height: 15, width: 15, marginRight: 5, marginTop: Platform.OS === 'android' ? 2 : 0 }} />
                <Text style={{ color: '#9197A3', fontSize: 15, lineHeight: 15 }}>Share</Text>
              </TouchableOpacity>
            </Col>
          </Grid>

        </Content>
        <View style={styles.footer}>
          <View style={styles.footerBlocks}>
            <Button transparent>
              <Text style={styles.footerText}>About</Text>
            </Button>
          </View>
          <View style={{ ...styles.footerBlocks, ...styles.footerMiddleBlock }}>
            <Button transparent>
              <Text style={styles.footerText}>Photos</Text>
            </Button>
          </View>
          <View style={styles.footerBlocks}>
            <Button transparent>
              <Text style={styles.footerText}>Friends</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}


export default connect(null, bindAction)(Profile);
