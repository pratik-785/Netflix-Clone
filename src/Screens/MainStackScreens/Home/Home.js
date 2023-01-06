import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Header from '../../../Components/Header';
import Slider from '../../../Components/Slider';
import Row from '../../../Components/Row/Row';
import requests from '../../../Requests/requests';
import { moderateScale, scale } from 'react-native-size-matters';
import { NoteContext } from '../../../Redux/Context/DataProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ route, navigation }) => {
  // console.log(requests.fetchTrending)
  
  // const handleGet = async (id) => {
  //   try{
  //     const value = await AsyncStorage.getItem('KEYSTRING');
  //     if(value !== null){
  //       alert(value)
  //     }
  //   } catch(error){
  //     console.log('data errror')
  //   }
  // }

  return (

    <ScrollView style={styles.container} >
      <Header />
      <Text
        style={{
          color: '#fff',
          marginBottom: 10,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        Netflix Originals
      </Text>
      <Slider />
      {/* <TouchableOpacity onPress={()=>handleGet()}><Text style={{color:'red'}}>Get</Text></TouchableOpacity> */}
      <Row apiData={requests.fetchTrending} title="Trending Now" navigation={navigation} />
      <Row apiData={requests.fetchTopRated} title="Top Rated" navigation={navigation} />
      <Row apiData={requests.fetchNeflixOriginals} title="Hollywood Movies" navigation={navigation} />
      <Row apiData={requests.fetchActionMovies} title="Action Movies" navigation={navigation} />
      <Text>dfd</Text>
    </ScrollView >


  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(12),
    width: '100%',
    color: '#fff',
    backgroundColor: '#000',
  },
});
