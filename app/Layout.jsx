import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import Button from "../components/Button";
// import { ScrollView } from "react-native-gesture-handler";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-black h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl w-[130px] text-center text-white font-semibold">
            Ax<Text className="text-[#FFB500]">Vid</Text>
          </Text>
          <Image
            source={images.cards}
            className="max-w-[380px] mx-auto h-[300px] w-full"
            resizeMode="contain"
          />
          <View className="relative mt-5 ">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Creavity Lies With{" "}
              <Text className="text-[#FFB500] ]">AxVid</Text>
            </Text>
            <Image
              source={images.path}
              className="-bottom-3 w-[140px]  h-[15px] absolute right-12"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-center text-gray-100 mt-7 ">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <TouchableOpacity className="bg-secondary mt-12 rounded-xl justify-center items-center">
            <Text className="text-primary font-semibold text-lg">
              CustomButton
            </Text>
          </TouchableOpacity>
          {/* <Button />
       <CustomButton /> */}
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
