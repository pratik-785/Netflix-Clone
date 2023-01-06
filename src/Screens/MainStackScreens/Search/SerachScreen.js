import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Dimensions, RefreshControl, PixelRatio, TextInput, Image, ActivityIndicator, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NoteContext } from '../../../Redux/Context/DataProvider';
import requests from '../../../Requests/requests';

const { width, height } = Dimensions.get("screen");

const base_url = "https://image.tmdb.org/t/p/original/"; //base URl is only for add this url "https://image.tmdb.org/t/p/original/" before img uri because img has half url like this "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" that's why img is not show if you add baseurl before the img path it will complete the url like https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg   

let onEndReachedMomentum = false

const SearchScreen = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
        isRefresh: false,
        loadMore: false,
        data: [],
        page: 1
    })

    const { isLoading, isRefresh, data, page, loadMore } = state;

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    useEffect(() => {
        getData(true, page);
    }, [])

    const getData = async (val, page = 1, loadMore = false) => {
        if (loadMore) {
            updateState({ loadMore: true })
        }
        if (val) {
            updateState({ isLoading: true })
        }
        else {
            updateState({ isRefresh: true })
        }
        try {
            // const API_KEY = requests.fetchActionMovies;
            const API_KEY = `https://api.themoviedb.org/3/trending/all/week?api_key=75030b9f5c5fd10c6f18b89ce5947834&language=en-US&page=${page}`;
            const response = await fetch(API_KEY);
            console.log("respnse==>", response)
            const result = await response.json()
            updateState({
                data: [...data, ...result.results],
                isLoading: false,
                isRefresh: false,
                page: page + 1,
                loadMore: false
            })
            console.log("result==>", result)
            // console.log(result)
        } catch (e) {
            console.log(e)
            updateState({ isLoading: false })
        }
    }

    // console.log("fulldata===>", data)
    const renderItems = ({ item }) => {
        return (
            <View style={{ flex: 1, width: '100%', padding: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('IndividualRow', { data: item })}>
                    <Image
                        source={{ uri: `${base_url}${item.backdrop_path}` }}
                        style={{ width: "100%", height: 150 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const handleRefresh = () => {
        getData(false, page)
    }

    const onEndReached = () => {
        getData(false, page, true)
    }

    return (
        // <>{loading ? 
        // <ActivityIndicator size={50} color="red" style={{flex:1,justifyContent:'center'}}/>
        // :
        <View style={{ flex: 1 }}>
            {/* <Text>SearchScreen</Text> */}
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('SubSearchSrc')}
                style={{ marginVertical: 10, borderRadius: 8, backgroundColor: '#555', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', height: 40, paddingHorizontal: 10, width: '98%' }}>
                <View style={{ width: "8%", height: "100%", justifyContent: 'center' }}>
                    <Image source={require("../../../Images/search.png")} style={{ width: 20, height: 20, tintColor: '#fff' }} />
                </View>

                <View style={{ width: '100%', justifyContent: 'center' }}>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Search</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{ flex: 1, height: '100%', marginVertical: 1 }}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItems}
                    numColumns={3}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefresh}
                            onRefresh={() => handleRefresh()}
                            tintColor="red"
                        />
                    }
                    ListFooterComponent={
                        <View style={{ marginVertical: 20 }}>
                            <ActivityIndicator color='red' size='large' />
                        </View>
                    }
                    onEndReachedThreshold={0.01}
                    onMomentumScrollBegin={() => {
                        onEndReachedMomentum = true
                    }}
                    onEndReached={() => onEndReached()}
                />
            </View>
        </View>
        // }</>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    // img:{
    //     width: width/3,
    //      margin:1,
    //      height: 300
    // },
    // halfImg:{
    //     width: width/3,
    //      margin:1,
    //      height: 150
    // },

})