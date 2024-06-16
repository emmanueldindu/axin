import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Layout = () => {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
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