import React, { useContext, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native'
import { Avatar } from 'react-native-paper';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
// This NoteContext is coming from dataProvider which is used for receive data from dataProvider
import { NoteContext } from '../../../Redux/Context/DataProvider';
// This authContext coming from authprovider which is only used for authentication process to get user and logout;
import { AuthContext } from '../../../Navigation/AuthProvider';

import BottomSheets from '../../../Components/BottomSheet/BottomSheet'
import RBSheet from "react-native-raw-bottom-sheet";

import imagePath from '../../../Constants/imagePath';
import { useState } from 'react';

const Profile = ({ navigation }) => {
  const refRBSheet = useRef();
  const { user, logout } = useContext(AuthContext)
  console.log("userrrrrrrrrrrrr", user.email)

  const openSheet = () => {
    refRBSheet.current.open()
  }

  return (
    // Container
    <View style={{ flex: 1 }}>

      <View style={{ borderBottomColor: '#bbb', borderBottomWidth: 1, alignItems: 'center', justifyContent: 'space-between', height: 50, width: "100%", marginBottom: 20, flexDirection: 'row' }}>
        <Text style={{ color: '#000', marginLeft: 4 }}>{user.email}</Text>
        <TouchableOpacity onPress={() => openSheet()} style={{ marginRight: 6 }} >
          <Image source={imagePath.icMenu} style={{ width: 30, height: 28, resizeMode: 'stretch' }} />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', }}>
        <View style={{}}>
          <Avatar.Image size={80} source={require('../../../Images/NLogo.png')} />
        </View>
        <View>
          {/* <Text style={{ color: "red" }}>{name}</Text> */}
          <TouchableOpacity onPress={() => logout()}>
            <Text style={{ color: "red" }}>LogOut</Text>
          </TouchableOpacity>

        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeDuration={600}
        animationType="slide"
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",

          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1,
            borderColor: '#bbb'
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <BottomSheets navigation={navigation} />
      </RBSheet>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})