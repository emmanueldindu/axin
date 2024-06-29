import { View, Text, Image } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";


const EmptyState = ({ subtitle, title }) => {
    const navigation = useNavigation()

  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px] "
        resizeMode="contain"
      />
      <Text className="text-white text-2xl  font-semibold text-center">
        {title}
      </Text>
      <Text className="text-sm mt-1 text-gray-100">{subtitle}</Text>
      <CustomButton 
      title={'Create a video'}
      continerStyles={'w-full my-5'}
      handlePress={() => navigation.navigate('Create')}
      
      />
    </View>
  );
};

export default EmptyState;
