import React,{useEffect} from 'react';
import {View,Text,ActivityIndicator} from 'react-native';

const LodingScreen = (props) =>{
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.reset({
                index:0,
                routes: [{name:'BottomTab'}]
            });
        },1000)
    },[])
    return(
        <View style={{flex:1,backgroundColor:'#000',justifyContent:'center',alignItems: 'center',}}>
            <ActivityIndicator size={50} color="red"/>
        </View>
    )
}

export default LodingScreen;


