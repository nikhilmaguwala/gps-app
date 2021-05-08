import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <Text>GPS App</Text>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'84WIaK3bl_s'}
      />
    </SafeAreaView>
  );
};

export default App;
