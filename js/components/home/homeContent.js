
import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content,
  Text, Thumbnail,
  Card, CardItem, ListItem,
  Left,
  Right,
  Body,
  Footer,
 } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import data from './data';
import styles from './styles';


const chatContactsImg = require('../../../images/chatcontacts.png');
const profileImg = require('../../../images/profile.png');
const notificationImg = require('../../../images/notification.png');
const likeImg = require('../../../images/like.png');
const commentImg = require('../../../images/comment.png');
const shareImg = require('../../../images/share.png');
const live = require('../../../images/live.png');
const photo = require('../../../images/cam.png');
const checkIn = require('../../../images/checkin.png');


class HomeContent extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }


  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <View style={styles.detailsBlock}>
            <View style={styles.whatsOnMind}>
              <Thumbnail size={60} square source={profileImg} />
              <TouchableOpacity onPress={() => Actions.updatePost()}>
                <Text style={styles.nameText}>Whats on your mind?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navLinks}>
              <TouchableOpacity style={styles.navLinkBtn}>
                <Image source={live} style={styles.navLinkIcons} />
                <Text style={styles.navLinkText}>Live</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.navLinkBtn, ...{ borderRightWidth: 1, borderLeftWidth: 1, borderLeftColor: 'rgba(0,0,0,0.1)', borderRightColor: 'rgba(0,0,0,0.1)' } }}>
                <Image source={photo} style={styles.navLinkIcons} />
                <Text style={styles.navLinkText}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navLinkBtn}>
                <Image source={checkIn} style={styles.navLinkIcons} />
                <Text style={styles.navLinkText}>Check In</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listViewBlock}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={dataRow =>
                <ListItem>
                  <Card style={styles.listItemView}>
                    <CardItem >
                      <Left>
                        <Thumbnail size={50} square source={dataRow.thumbnail} />
                        <Body>
                          <Text style={styles.userName}>{dataRow.name}</Text>
                          <View note style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, color: '#95969B' }}>
                              {dataRow.time}
                            </Text>
                            <Image source={notificationImg} style={{ resizeMode: 'contain', height: 18, width: 18, marginLeft: 7, marginTop: 2 }} />
                          </View>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem content bordered>
                      <Text style={{ color: '#1B1C21' }}>
                        {dataRow.content}
                      </Text>
                    </CardItem>
                    <CardItem >
                      <Left>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                          <Image source={likeImg} style={{ resizeMode: 'contain', height: 15, width: 15, marginRight: 5, marginTop: Platform.OS === 'android' ? 1 : -2 }} />
                          <Text style={{ color: '#9197A3', fontSize: 15, lineHeight: 15 }}>Like</Text>
                        </TouchableOpacity>
                      </Left>
                      <Body>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                          <Image source={commentImg} style={{ resizeMode: 'contain', height: 15, width: 15, marginRight: 5, marginTop: Platform.OS === 'android' ? 3 : 0 }} />
                          <Text style={{ color: '#9197A3', fontSize: 15, lineHeight: 15 }}>Comment</Text>
                        </TouchableOpacity>
                      </Body>
                      <Right>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                          <Image source={shareImg} style={{ resizeMode: 'contain', height: 15, width: 15, marginRight: 5, marginTop: Platform.OS === 'android' ? 2 : 0 }} />
                          <Text style={{ color: '#9197A3', fontSize: 15, lineHeight: 15 }}>Share</Text>
                        </TouchableOpacity>
                      </Right>
                    </CardItem>
                  </Card>
                </ListItem>
                    }
            />
          </View>
        </Content>
        <Footer />
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}


export default connect(null, bindAction)(HomeContent);
