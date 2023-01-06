import { useNavigation, useState } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const base_url = "https://image.tmdb.org/t/p/original/"; //base URl is only for add this url "https://image.tmdb.org/t/p/original/" before img uri because img has half url like this "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" that's why img is not show if you add baseurl before the img path it will complete the url like https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg   

const ShowList = ({ data,setLoading }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('IndividualRow', { data: data })}>
            <View style={{margin: scale(4)}}>
                <LinearGradient
                    // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0.5, 0.7, 0.6]}
                    colors={['#222', '#222', '#000000']}
                >
                    <ImageBackground
                        source={{ uri: `${base_url}${data.backdrop_path}` }}
                        resizeMode= 'cover'
                        style={{paddingBottom:scale(5),justifyContent:'flex-end',alignItems: 'center',opacity: 0.7,color:'#ffffff',width: scale(106), height: 170, borderRadius: scale(7) }}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>{data.title}</Text>
                    </ImageBackground>
                </LinearGradient>
            </View>
        </TouchableOpacity> 
    )
}


export default ShowList;