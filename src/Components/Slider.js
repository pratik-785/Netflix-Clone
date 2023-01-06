import React, { Component, useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
 
import requests from '../Requests/requests';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const base_url = "https://image.tmdb.org/t/p/original/";
const Slider = () => {

   const [data, setData] = useState([]);

   useEffect(()=>{
    getData();
   })

   const getData = async () => {
        try {
          const apiUrl = requests.fetchTrending;
          const response = await fetch(apiUrl);
          const myData = await response.json();
          const fullData = myData.results
          setData(fullData);
        } catch (error) {
          console.log(error);
        }
      };
      function truncate(str, number) {
            return str?.length > number ? str.substr(0, number - 1) + '....' : str;
          }
        
      const renderItems = ({ item }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                 style={{marginRight:5,alignItems:'center',justifyContent:'center'}}
                 >
                  <Image
                    source={{ uri: `${base_url}${item.backdrop_path}` }}
                    style={{
                      width: scale(320),
                      height: '100%',
                      resizeMode:"cover",
                      marginRight: moderateScale(2)
                    }}/>
                    
                </View>
              </View>
            );
          };

    return (
      <View style={{flex:1, height:scale(200),width:'100%'}}>
        <FlatList
            data={data}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
            renderItem={renderItems}
        />
      </View>
    )
}

export default Slider;
 
const styles = StyleSheet.create({
  
})
 

// import React, { useState, useEffect } from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   ImageBackground,
//   FlatList,
// } from 'react-native';
// import { moderateScale } from 'react-native-size-matters';

// import Swiper from 'react-native-swiper';
// import requests from '../Requests/requests';

// const { width } = Dimensions.get('window');
// const ratio = 1099 / 1233;

// const base_url = "https://image.tmdb.org/t/p/original/";

// const Slider = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       // const apiUrl =
//       //   'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';
//       const apiUrl = requests.fetchTrending;
//       const response = await fetch(apiUrl);
//       const myData = await response.json();
//       const fullData = myData.results
//       setData(fullData);
//       // setData(myData[Math.floor(Math.random() * myData.length - 1)])
//       // console.log("myData ==== ", myData.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   function truncate(str, number) {
//     return str?.length > number ? str.substr(0, number - 1) + '....' : str;
//   }


//   const renderItems = ({ item }) => {
//     return (
//       <View
//         style={{
//           flexDirection: 'row',
//           // width: "100,
//           // marginRight: 5,
//         }}>
//         <View style={{marginRight:5,alignItems:'center',justifyContent:'center'}}>
//           <ImageBackground
//             source={{ uri: `${base_url}${item.backdrop_path}` }}
//             style={{
//               width: 330,
//               flexGrow:1,
//               height: '100%',
//               resizeMode:"center"
              
//             }}>
//             <Text style={{ color: '#fff' }}> {truncate(item.title, 25)}</Text>
//           </ImageBackground>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={{ height: 200, width: width }}>
//       <FlatList
//         data={data}
//         horizontal
//         pagingEnabled
//         keyExtractor={item => item.id}
//         renderItem={renderItems}
//       />
//     </View>
//   );
// };

// export default Slider;

// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     height: 170,
//     width: '100%',
//     backgroundColor: 'red',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//   },
//   slide2: {
//     height: 170,
//     width: width,
//     backgroundColor: 'red',
//     // marginHorizontal: 2,
//   },
//   slide3: {
//     height: 170,
//     width: width,
//     backgroundColor: 'red',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// });
// // import React from 'react';
// // import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';

// // import Swiper from 'react-native-swiper';
// // // import { useEffect, useState } from 'react';

// // const Carousel = () => {
// //     const [data, setData] = React.useState([]);

// //     // const getData = async () => {
// //     //     try {
// //     //         const apiUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=936db64f4547ed46dc5c05f204a0da8c&language=en-US"
// //     //         const response = await fetch(apiUrl);
// //     //         const myData = await response.json()
// //     //         setData(myData.results)
// //     //         console.log("result === ",myData.production_companies.name)

// //     //     } catch (error) {
// //     //         console.log(error)
// //     //     }
// //     // }

// //     // React.useEffect(() => {
// //     //     getData()
// //     // }, [])

// //     // const renderItems = ({item}) =>{
// //     //     return(
// //     //         <View style={{flex:1,height:100,width:300,backgroundColor:'#555',marginHorizontal:15,}}>
// //     //             <Image source={{uri:item.poster_path}} style={{width:100,height:100,backgroundColor:'red'}}/>
// //     //             <Text style={{color:'red'}}>
// //     //                 {item.title}
// //     //             </Text>
// //     //         </View>
// //     //     )
// //     // }

// //     return (
// //         <View style={styles.container}>
// //             <View><Text style={{color:'#fff'}}>Text</Text></View>

// //         </View>
// //     )

// // }

// // export default Carousel

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         // backgroundColor: 'red'
// //     },

// //     myImageStyle: {
// //         height: '90%',
// //         width: '100%',
// //         resizeMode: 'contain',
// //     }
// // })
