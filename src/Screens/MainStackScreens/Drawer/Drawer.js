import React, { useState, useEffect, } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import StarsComp from '../../../Components/StarsComp/StarsComp';

const base_url = "https://image.tmdb.org/t/p/original/";

const Drawer = () => {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);

    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const apiUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=75030b9f5c5fd10c6f18b89ce5947834&language=en-US&page=2"
            const response = await fetch(apiUrl);
            const fullData = await response.json()
            setData(fullData.results);
            setNewData(fullData.results);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    }

    const renderItems = ({ item }) => {
        console.log(item.vote_average.toPrecision(2));
        return (
            <View style={{ padding: 5 }}>
                <Image source={{ uri: `${base_url}${item.backdrop_path}` }} style={{ width: 170, height: 200 }} />
                <Text>{item.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Ratings: {item.vote_average.toPrecision(2)}</Text>
                    <Text style={{ fontSize: 11, marginBottom: 15 }}>⭐</Text>
                </View>
            </View>
        )
    }

    function handleBest() {
        setLoading(true)
        const bestMovies = newData.filter((e) => {
            return e.vote_average > 7
        })
        setData(bestMovies);
        setLoading(false)
        console.log('bestMovies===', data)
    }

    function handleUnderSix() {
        setLoading(true)
        const underSix = newData.filter((e) => {
            return e.vote_average < 7
        })
        setData(underSix);
        setLoading(false)
        console.log("underSix===", data)
    }

    return (
        <>
            {loading ?
                <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={50} color="red" />
                </View>
                :
                <View>
                    <View style={{ height: 50, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => setShow(!show)}>
                            <Text style={{ fontSize: 18, fontWeight: '800' }}>Filter</Text>
                        </TouchableOpacity>
                        {
                            show ?
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <TouchableOpacity onPress={() => setData(data)}><Text style={{ fontSize: 16, color: 'red', marginHorizontal: 10, fontWeight: '800' }}>All</Text></TouchableOpacity> */}
                                    <TouchableOpacity onPress={() => handleBest()}><Text style={{ fontSize: 16, color: 'red', marginHorizontal: 10, fontWeight: '800' }}>Best Movies</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleUnderSix()}><Text style={{ fontSize: 16, color: 'red', fontWeight: '800' }}>Under 6 ratings</Text></TouchableOpacity>
                                </View>
                                :
                                null
                        }
                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItems}
                        numColumns={2}
                    />
                </View>
            }
        </>
    )
}

export default Drawer;