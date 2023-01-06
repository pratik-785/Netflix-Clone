import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
// DataProvider is for context api here providers file is wrapped in DataProvider that's why i can send anyscreen which is in the provider.
// import DataProvider from './src/Redux/Context/DataProvider';

{/* This providers coming from index.js file which is in the navigation folder */ }
import Providers from './src/Navigation';
import { DataProvider } from './src/Redux/Context/DataProvider';
import Reducer, { initialState } from './src/Redux/Reducer/Reducer';

const App = () => {

  return (
    <>
      <DataProvider initialState={initialState} reducer={Reducer} >
        <View style={styles.container}>
          <StatusBar backgroundColor="#000" />
          <Providers />
        </View>
      </DataProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;


// import React from 'react';
// import { View,Text } from 'react-native';
// const App = () =>{
//   return(
//     <View>
//       <Text>
//         App  
//       </Text>
//     </View>
//   )
// }

// export default App