import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../Constants/imagePath';
import { useStateValue } from '../../Redux/Context/DataProvider';

const ActionList = (props) => {
    const [{ saved }, dispatch] = useStateValue();

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [share, setShare] = useState(false);
    const [save, setSaved] = useState(false);

    const handlePostData = () => {
        // console.log('saved')
        setSaved(!save)
        dispatch({
            type: 'ADD_TO_SAVED',
            item: {
                id: props.data.route.params.data.id,
                title: props.data.route.params.data.title,
                image: props.data.route.params.data.backdrop_path,
            }
        })
    }

    return (
        <View style={{ height: moderateScale(55), flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ alignItems: 'center', width: '25%', }}>
                    <TouchableOpacity style={{ marginBottom: 5 }} onPress={() => setLike(!like && dislike == like)} >
                        <Image source={like ? imagePath.icLikeBold : imagePath.icLike} style={{ width: scale(22), height: scale(22), resizeMode: 'cover', tintColor: "#fff" }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff' }}>Like</Text>
                </View>

                <View style={{ alignItems: 'center', width: '25%', }}>
                    <TouchableOpacity style={{ marginBottom: 5 }} onPress={() => setDislike(!dislike && like == dislike)} >
                        <Image source={dislike ? imagePath.icDislikeBold : imagePath.icDislike} style={{ width: scale(20), height: scale(20), resizeMode: 'cover', tintColor: "#fff" }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff' }}>Dislike</Text>
                </View>

                <View style={{ alignItems: 'center', width: '25%', }}>
                    <TouchableOpacity style={{ marginBottom: 5 }} onPress={() => setShare(!share)} >
                        <Image source={share ? imagePath.icShare : imagePath.icShare} style={{ width: scale(20), height: scale(20), resizeMode: 'cover', tintColor: "#fff" }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff' }}>Share</Text>
                </View>

                <View style={{ alignItems: 'center', width: '25%', }}>
                    <TouchableOpacity style={{ marginBottom: 5 }} onPress={() => handlePostData()} >
                        <Image source={save ? imagePath.icSavedBold : imagePath.icSave} style={{ width: scale(20), height: scale(20), resizeMode: 'cover', tintColor: "#fff" }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff' }}>Save</Text>
                </View>
            </View>
        </View>
    )
}

export default ActionList;