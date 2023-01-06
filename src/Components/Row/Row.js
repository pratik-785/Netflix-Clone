import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { NoteContext } from '../../Redux/Context/DataProvider';
// scale = fontSize;
// vertical = top and bottom;
// moderateScale = left and right;

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ navigation, title, apiData, isLarge }) => {
  //   let {apiData} = props;
  // console.log('apii', apiData)
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const rowApi = apiData;
      const response = await fetch(rowApi);
      const result = await response.json();
      setData(result.results);
      // setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  // as where truncate sending 2 values title and number 25 
  const truncate = (str, number) => { // [str= title], [number= 25]
    return str?.length > number ? str.substr(0, number - 1) + '....' : str;
  };

  const renderItems = ({ item }) => {
    // console.log("props===",navigation)
    const { backdrop_path, title } = item;
    return (
      <>
        {isLarge ? (
          // This css is for Large row if in parent component isLarge is true then this css will be run.
          <View
            style={{
              flexDirection: 'row',
              // width: 330,
              height: 200,
              marginRight: 5,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('IndividualRow', { data: item })}>
              <ImageBackground
                source={{ uri: `${base_url}${backdrop_path}` }}
                style={{
                  width: 340,
                  height: '100%',
                  borderRadius: 5,
                }}>
                <Text style={{ color: '#fff' }}> {truncate(title, 25)}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ) : (
          // This css is for small row if in parent component isLarge is not true then this css will be run.
          <View style={{}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('IndividualRow', { data: item })} style={{
                borderRadius: 15,
              }}>

              <ImageBackground
                source={{ uri: `${base_url}${item.backdrop_path}` }}
                style={{
                  width: moderateScale(106),
                  height: moderateScale(150),
                  marginRight: 5,
                  borderRadius: 15,
                }}
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: scale(13), fontWeight: 'bold' }}> {item.title != null ? truncate(item.title, 13) : 'title'}</Text>
          </View>
        )}
      </>
    );
  };

  return (
    <>
      {/* { loading ?  */}
      {/* //  <ActivityIndicator color='red' size={30}/> */}
      {/* //  : */}
      <View style={{ marginTop: 10, height: moderateScale(220) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
          }}>
          <Text style={{ color: '#fff', fontSize: scale(17), fontWeight: '700' }}>
            {/* {props.title} */}
            {title}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ViewAllList', { list: data })}>
            <Text style={{ color: 'red', fontSize: scale(14), fontWeight: '700' }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItems}
          horizontal
          pagingEnabled
        />
      </View>
      {/* } */}
    </>

  );
};

export default Row;
