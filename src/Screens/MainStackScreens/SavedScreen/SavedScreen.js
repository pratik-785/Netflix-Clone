import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters';
import { useStateValue } from '../../../Redux/Context/DataProvider';

const base_url = "https://image.tmdb.org/t/p/original/"; //base URl is only for add this url "https://image.tmdb.org/t/p/original/" before img uri because img has half url like this "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" that's why img is not show if you add baseurl before the img path it will complete the url like https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg   

const SavedScreen = () => {
    const [{ saved }, dispatch] = useStateValue();
    console.log("savedddd>>>", saved.length)


    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, }}>
                <Image
                    source={{ uri: `${base_url}${item.image}` }}
                    style={{ height: scale(140), width: scale(110), margin: moderateScale(1) }} />
                <Text numberOfLines={1} style={{ fontWeight: '700', color: '#000' }} >{item?.title}</Text>
            </View>
        )
    }
    return (
        <>{saved.length == 0 ?
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#000', fontWeight: '600' }}>
                    Nothing Saved
                </Text>
            </View>
            :
            <View style={{ flex: 1, padding: moderateScale(2) }}>
                <View style={{ borderBottomWidth: 1, borderColor: '#ddd', paddingVertical: 6, marginBottom: 6 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}> Saved</Text>
                </View>
                <FlatList
                    data={saved}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={3}
                />
            </View>
        }</>
    )
}

export default SavedScreen

const styles = StyleSheet.create({})