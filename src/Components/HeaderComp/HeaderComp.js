import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo'
import { useStateValue } from '../../Redux/Context/DataProvider';
// import { NoteContext } from '../../Redux/Context/DataProvider';


const HeaderComp = (props) => {

    const [{ saved }, dispatch] = useStateValue();
    console.log('this is saved', saved);
    // const {setDownloadMovies, downloadMovies} = useContext(NoteContext)
    // const handlePostData = () =>{
    //     setDownloadMovies(props.data.route.params.data)
    // }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: scale(40), width: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
            <View style={{ marginLeft: scale(10), backgroundColor: 'red', borderRadius: 40, width: 40, height: 40 }}>
                <TouchableOpacity><Text style={{ color: '#fff' }}>Back</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '50%', backgroundColor: 'yellow', justifyContent: 'space-around' }}>
                <TouchableOpacity><Text style={{ color: 'red' }}>Share</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => handlePostData()}><Text style={{ color: 'red' }}>Save</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderComp;


{/* <NativeBaseProvider>
                    <Box h="80%" w="90%" alignItems="flex-start">
                    <Menu w="190" trigger={triggerProps => {
                        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                            <Entypo name="dots-three-vertical" size={20} color="white" />

                        </Pressable>;
                    }}>
                        <Menu.Item>Arial</Menu.Item>
                        <Menu.Item>Nunito Sans</Menu.Item>
                        <Menu.Item>Roboto</Menu.Item>
                        <Menu.Item>Poppins</Menu.Item>
                        <Menu.Item>SF Pro</Menu.Item>
                        <Menu.Item>Helvetica</Menu.Item>
                        <Menu.Item isDisabled>Sofia</Menu.Item>
                        <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                    </Box>;
                </NativeBaseProvider> */}