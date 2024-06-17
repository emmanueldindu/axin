import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Layout = () => {


    return (
        <View className=' mt-12'>
          <Text className='text-black font-semibold'>Axin</Text>
          {/* <StatusBar style="auto" /> */}
        </View>
      );
    }
    
    export default Layout
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });