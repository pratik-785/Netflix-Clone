import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import ShowList from '../../../Components/ShowList/ShowList';
import { NoteContext } from '../../../Redux/Context/DataProvider';

const base_url = "https://image.tmdb.org/t/p/original/"; //base URl is only for add this url "https://image.tmdb.org/t/p/original/" before img uri because img has half url like this "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" that's why img is not show if you add baseurl before the img path it will complete the url like https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg   

const ViewAllList = (props) => {
    // console.log("ListData ===> ", props.route.params.list.title)
    // let {title,media_type} = props.route.params.list
    // const [loading, setLoading] = useState(true)
    const { loading } = useContext(NoteContext)

    return (
        <>
            {loading ?
                <ActivityIndicator size={40} color="red" />
                :
                <ScrollView style={{ flex: 1, backgroundColor: '#000', paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', }}>
                        {props.route.params.list.map((e, i) => {
                            return (
                                <ShowList data={e} key={e.id} />
                            )
                        })}
                    </View>
                </ScrollView>
            }
        </>
    )
}

export default ViewAllList;