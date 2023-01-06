import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { AuthContext } from '../../../Navigation/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginForm = ({ navigation }) => {
  // const {setName} = useContext(NoteContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true)
  // console.log('email === ', email, 'password ==== ', password);
  const [checked, setChecked] = useState(false);

  const { login } = useContext(AuthContext)
  // console.log(register)

  // const submit = () => {
  //    login(email,password)
  // };

  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../../Images/LoginBackground.jpg')}
          style={{
            flex: 1,
            // opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Form in center */}
          <View
            style={{
              height: 500,
              width: 300,
              backgroundColor: '#222',
              // justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
              backgroundColor: 'rgba(0,0,0,0.6)',
              padding: 40,
            }}>
            {/* N logo at the top */}
            <View style={{ paddingBottom: 40 }}>
              <Image
                source={require('../../../Images/NLogo.png')}
                style={{ width: 80, height: 70 }}
              />
            </View>

            {/* Name input */}
            <View style={styles.inputCotainer}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                labelValue={email}
                placeholder="Email or Phone Number"
                keyboardShouldPersistTaps={false}
                value={email}
                onChangeText={(e) => {
                  setEmail(e)
                  // setName(e)
                }}
                style={{
                  backgroundColor: '#fff',
                  width: 220,
                  height: 40,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
            </View>

            {/* Password input */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                labelValue={password}
                secureTextEntry={secure ? true : false}
                placeholder="Password"
                style={{
                  backgroundColor: '#fff',
                  width: 190,
                  marginVertical: 15,
                  height: 40,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  paddingHorizontal: 10,
                }}
                value={password}
                onChangeText={e => setPassword(e)}
              />
              <View style={{
                backgroundColor: '#fff',
                width: 30,
                // marginVertical: 15,
                height: 40,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                justifyContent: 'center'
              }}>
                <TouchableOpacity onPress={() => setSecure(!secure)} >
                  {/* <Text style={{ color: 'red', fontSize: 19, fontWeight: '900' }}>{secure ? "Eye" : 'Nay'}</Text> */}
                  {secure ?
                    <Ionicons name="md-eye-off-outline" size={20} />
                    :
                    <Ionicons name="md-eye-outline" size={20} />
                  }
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign up button */}
            <TouchableOpacity
              onPress={() => login(email, password)}
              style={{
                width: 220,
                backgroundColor: 'red',
                marginVertical: 20,
                padding: 10,
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
            </TouchableOpacity>

            {/* Checkbox */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                color="red"
                uncheckedColor="#fff"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={{ color: '#fff' }}>Remember My Login</Text>
            </View>

            {/* Already have account Sign In */}
            <View style={{ marginVertical: 20, flexDirection: 'row' }}>
              <Text style={{ color: '#fff', fontWeight: '700', marginRight: 5 }}>
                New to Netflix?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={{ color: 'red', fontWeight: '700' }}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});
