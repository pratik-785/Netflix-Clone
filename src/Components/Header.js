import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        backgroundColor: '#000',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
      }}>
      {/* Left Section */}
      <View style={{ width: '70%', flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <TouchableOpacity onPress={()=> navigation.navigate('Drawer')}>
            <MaterialIcons name="sort" size={28} style={{ color: '#fff' }} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '40%' }}>
          <Image
            source={require('../Images/NetflixLogo.png')}
            style={{ resizeMode: 'contain', width: '100%', height: 50 }}
          />
        </View>
      </View>

      {/* Right Section */}
      <View
        style={{
          width: '30%',
          height: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={()=> navigation.navigate('GO')}>
          <MaterialIcons name="sort" size={28} style={{ color: '#fff' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
