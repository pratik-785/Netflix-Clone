// import React from 'react';
// import { View, Text,Image } from 'react-native';
// import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

// const base_url = "https://image.tmdb.org/t/p/original/"; //base URl is only for add this url "https://image.tmdb.org/t/p/original/" before img uri because img has half url like this "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" that's why img is not show if you add baseurl before the img path it will complete the url like https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg   

// const Video = (props) => {
//     console.log("video==",props)    
//     return (
//         <View style={{ flex: 1, backgroundColor: 'yellow', }}>
//             <View style={{ height: moderateScale(200) }}>
//                 <Image source={{uri: `${base_url}${props.route.params.items.backdrop_path}`}} style={{width:'100%',height:moderateScale(200),resizeMode:'cover'}} />
//                 <Text>{props.route.params.items.title}</Text>
//             </View>
//         </View>
//     )
// }

// export default Video;