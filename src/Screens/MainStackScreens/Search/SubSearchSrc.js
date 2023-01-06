import { Image, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import requests from '../../../Requests/requests'

const base_url = "https://image.tmdb.org/t/p/original/"; //base URl is only for add this url "https://image.tmdb.org/t/p/original/" before img uri because img has half url like this "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" that's why img is not show if you add baseurl before the img path it will complete the url like https://image.tmdb.org/t/p/original//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg   

const SubSearchSrc = ({ navigation }) => {
    const [filterdData, setFilterdData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const API_KEY = "https://api.themoviedb.org/3/trending/all/week?api_key=75030b9f5c5fd10c6f18b89ce5947834&language=en-US&page=2";
            const response = await fetch(API_KEY);
            const result = await response.json()
            setFilterdData(result.results)
            setMasterData(result.results)
        } catch (e) {
            console.log(e)
        }
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setFilterdData(newData)
            setSearch(text);
        } else {
            setFilterdData(masterData);
            setSearch(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            // This condition is for don't want show all data first. Show data only when we search something then show related result don't show all the data list
            <>{
                search !== '' ?
                        <TouchableOpacity
                            onPress={() => navigation.navigate('IndividualRow', { data: item })}
                            style={{ width: '100%', marginVertical: 8 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={{ uri: `${base_url}${item.backdrop_path}` }}
                                    style={{ opacity: 0.7, marginRight: 15, alignItems: 'center', borderRadius: 18, width: 35, height: 35, resizeMode: 'cover' }}
                                />
                                <Text style={{ fontSize: 18, color: '#fff' }}>
                                    {item.title ? item.title : 'Not a title'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    :
                    null
            }
            </>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000', padding: 8 }}>
            {/* TextInput starts */}
            <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderBottomColor: '#bbb' }}>
                <View
                    style={{ width: '12%', backgroundColor: '#444', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                    <Image source={require("../../../Images/search.png")} style={{ width: 24, height: 24, tintColor: '#fff' }} />
                </View>
                <View style={{ backgroundColor: '#444', width: '88%', borderTopRightRadius: 8, borderBottomEndRadius: 8 }}>
                    <TextInput
                        placeholder='Search'
                        value={search}
                        style={{ fontSize: 19, color: '#fff' }}
                        placeholderTextColor="#fff"
                        // underlineColorAndroid='transperent'
                        onChangeText={(text) => searchFilter(text)}
                    />
                </View>
            </View>
            {/* TextInput section ends */}

            {search !== '' ?
                <View style={{ marginVertical: 10, flex: 1, height: '100%' }}>
                    <FlatList
                        data={filterdData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ItemView}
                    />
                </View>
                :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 19, color: '#fff' }}>Search</Text>
                </View>
            }
        </View>
    )
}

export default SubSearchSrc;

// const styles = StyleSheet.create({})
// import React, { useEffect, useState } from 'react'
// import { StyleSheet, Text, View, Button, PermissionsAndroid } from 'react-native'
// import ImageCropPicker from 'react-native-image-crop-picker';
// import RNFetchBlob from 'rn-fetch-blob';
// // import RNFetchBlob from '../index.js'

// // import { NativeModules } from 'react-native';
// // const RNFetchBlob = NativeModules.RNFetchBlob

// const SubSearchSrc = () => {
//     const [storagePermission, setStoragePermission] = useState(false)

//     useEffect(() => {
//         checkAndGrantStoragePermission();
//     }, [])

//     const onSelect = () => {
//         ImageCropPicker.openPicker({ includeBase64: true }).then((image) => {
//             const splittedArray = image.path.split('/');
//             const fileName = splittedArray[splittedArray.length - 1]
//             console.log('fileName==>', fileName)
//             saveImage({ source: image.data, fileName: fileName })
//         });
//     }

//     const saveImage = ({source, fileName}) => {
//         try {
//             const folderPath = '/storage/emulated/0/Youtube';
//             const filePath = folderPath + '/' + fileName;
//             RNFetchBlob.fs.isDir(folderPath).then((isDir) => {
//                 if (isDir) {
//                     addImage({ source: source, path: filePath });
//                 } else {
//                     RNFetchBlob.fs.mkdir(folderPath).then(() => {
//                         addImage({ source: source, path: filePath })
//                     })
//                 }
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const addImage = ({ source, path }) => {
//         RNFetchBlob.fs.createFile({path, source, encoding : 'base64'}).then(() => {
//             console.log('image has been saved')
//         })
//     }

//     const checkAndGrantStoragePermission = () => {
//         PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((isPermitted) => {
//             if (isPermitted) {
//                 setStoragePermission({ storagePermission: true })
//             } else {
//                 PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
//                     message: 'Please give aceess to save image',
//                     title: 'Storage Permission'
//                 }).then(() => {
//                     setStoragePermission({ storagePermission: true })
//                 })
//             }
//         })
//     }

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>SubSearchSrc</Text>
//             <Button title='select image' onPress={() => onSelect()} />
//         </View>
//     )
// }

// export default SubSearchSrc

// const styles = StyleSheet.create({})


//             setSearch(text)