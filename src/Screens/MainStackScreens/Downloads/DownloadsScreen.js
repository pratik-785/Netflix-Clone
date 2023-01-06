import React from 'react';
import {ScrollView, Text} from 'react-native';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

const DownloadsScreen = ({enableSomeButton}) => (
  <ScrollView
    onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        enableSomeButton();
      }
    }}
    scrollEventThrottle={400}
  >
    <Text>Here is very long lorem ipsum or something...</Text>
  </ScrollView>
);

export default DownloadsScreen;


// import { StyleSheet, Text, View } from 'react-native'
// import React,{useContext} from 'react'
// import { NoteContext } from '../../../Context/DataProvider'

// const DownloadsScreen = () => {
//   // const {downloadMovies} = useContext(NoteContext)
//   // console.log(downloadMovies)
//   return (
//     <View>
//       {/* <Text >{downloadMovies.title}</Text> */}

//     </View>
//   )
// }

// export default DownloadsScreen

// const styles = StyleSheet.create({})