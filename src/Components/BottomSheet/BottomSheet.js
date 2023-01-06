import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import imagePath from '../../Constants/imagePath'

const BottomSheet = ({ navigation }) => {

  return (
    <View style={{ marginTop: 6, padding: 6 }}>
      <TouchableOpacity onPress={() => navigation.navigate('SavedScreen')}>
        <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', width: '100%' }}>
          <Image source={imagePath.icSave} style={{ width: 26, height: 26, resizeMode: 'stretch', marginRight: 8 }} />
          <Text style={{ color: '#000', fontSize: 18 }}>Saved</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BottomSheet

const styles = StyleSheet.create({})