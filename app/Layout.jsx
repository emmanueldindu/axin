import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from "react-native-gesture-handler";

const Layout = () => {
  const navigation = useNavigation();

  return (
  <SafeAreaView className='bg-primary h-full'>
    <ScrollView contentContainerStyle={{height: '100%'}}>
      <View className='w-full justify-center item-center h-full px-4'>
        

      </View>

    </ScrollView>



  </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
