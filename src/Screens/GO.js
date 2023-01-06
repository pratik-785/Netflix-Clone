import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions, Animated, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const GO = () => {
  let listViewRef;
  const [data, setData] = useState([]);
  const [height, setHeight] = useState('');
  console.log("height==>", height)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const API_KEY = "https://jsonplaceholder.typicode.com/posts"
      const respnse = await fetch(API_KEY);
      const result = await respnse.json()
      setData(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const ItemView = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: 'red', margin: 5, padding: 10 }}>
        <Text>{item.title}</Text>
      </View>
    )
  }

  const UpperHandler = () => {
    listViewRef.scrollToOffset({ offset: 0, animated: true })
  }

  const onScroll = (e) => {
    setHeight(e.nativeEvent.contentOffset.y);
  }

  return (
    <>{loading === true ?
      <ActivityIndicator color='red' size={50} style={{flex:1, justifuContent:'center', alignItems:'center'}}/> 
      :
      <View style={{ flex: 1 }}>
        <Text>GO</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={ItemView}
          initialNumToRender={5} 
          ref={(ref) => {
            listViewRef = ref;
          }}
          onScroll={onScroll}
        />
        {height > 100 ?
          <Animatable.View animation='fadeInUpBig' easing="linear" >
            <TouchableOpacity
              onPress={() => UpperHandler()}
              style={{ borderRadius: 50, position: 'absolute', bottom: 10, right: 5, backgroundColor: '#000', height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
              <MaterialIcons name='keyboard-arrow-up' size={26} style={{ color: '#fff' }} />
            </TouchableOpacity>
          </Animatable.View>
          : null
        }
      </View>
    }
    </>
  )
}

export default GO

const styles = StyleSheet.create({})



// for Animated.View
  // const diffClamp = Animated.diffClamp(scrollY, 0, 10)

  // const translateY = diffClamp.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [0, 50]
  // })