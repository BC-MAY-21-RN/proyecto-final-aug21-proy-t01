import React from 'react';
import {Alert, View} from 'react-native';
import Video from 'react-native-video';
import {styles} from './styles';

const GameVideo = () => {
  return (
    <View style={styles.videoContainer}>
      <Video
        source={{uri: 'https://www.youtube.com/embed/GeCNShiLdpc'}}
        style={styles.video}
        paused={false}
        onError={(e) => console.log(e)}
        resizeMode="contain"
      />
    </View>
  );
};

export default GameVideo;
