import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.reset({
        index: 0,
        routes: [{name: 'LoginForm'}],
      });
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../Images/NLogo.png')}
        style={{height: 130, width: 150}}
      />
    </View>
  );
};

export default SplashScreen;
