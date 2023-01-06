import React from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Dropdown from '../../../Components/DropDown/Dropdown';
import ActionList from '../../../Components/ActionList/ActionList.js';
import { moderateScale, scale } from 'react-native-size-matters';
import HeaderComp from '../../../Components/HeaderComp/HeaderComp';
import { Image } from 'react-native';
import imagePath from '../../../Constants/imagePath';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const base_url = "https://image.tmdb.org/t/p/original/"; //base URl is only for add this url "https://image.tmdb.org/t/p/original/" before img uri because img has half url like this "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" that's why img is not show if you add baseurl before the img path it will complete the url like https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg   

const IndividualRow = (props) => {
  console.log("Indnavigation==>", props);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={{}}>
        {/* <Image source={{ uri: `${base_url}${props.route.params.data.backdrop_path}` }} style={{ width: Width, height: 300, resizeMode: 'cover' }} /> */}
        <ImageBackground
          source={{ uri: `${base_url}${props.route.params.data.backdrop_path}` }} style={{ position: 'relative', opacity: 0.7, width: Width, height: 300, resizeMode: 'cover' }}
        >
          <TouchableOpacity
            style={{ marginTop: 8, marginLeft: 4, backgroundColor: 'rgba(0,0,0,0.5)', borderWidth: 1, borderColor: '#fff', width: moderateScale(40), height: moderateScale(40), alignItems: 'center', justifyContent: 'center', borderRadius: moderateScale(20) }}
            onPress={() => props.navigation.goBack()}
          >
            <Image source={imagePath.icBack} style={{ tintColor: '#fff', height: 20, width: 20 }} />
          </TouchableOpacity>

        </ImageBackground>
        {/* <Text style={{ color: 'red' }}>{props.route.params.data.title}</Text> */}
        <Dropdown info={props.route.params.data} />
        <ActionList data={props} />
      </View>
    </ScrollView >
  );
};

export default IndividualRow;



// This logic is for if stars is lesser than 4 it's means good if 7 or more than 7 it's tell us that best, if this stars are more than 9 it will show us Excellent, if not match any condition then show "Not Best" 
// 
{/* <Text style={{ color: '#ffffffff',fontSize:16 }}>
        {props.route.params.data.vote_average >= 4 ?
          props.route.params.data.vote_average + 'good'
          : props.route.params.data.vote_average >= 7 ? props .route.params.data.vote_average + 'best'
            : props.route.params.data.vote_average >= 9 ? props.route.params.data.vote_average + 'Excellent' : 'Not Best'
        }</Text> */}
// 