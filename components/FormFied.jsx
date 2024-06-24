import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, {useState} from "react";
import images from "../constants/images";
import icons from '../constants/icons'
const FormFied = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {

    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-gray-300">{title}</Text>
      <View className="w-full h-16 bg-black-100 rounded-xl px-6 focus:border-secondary items-center flex-row">
        <TextInput
        className='flex-1 h-full w-full text-white font-semibold'
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        placeholderTextColor='#7b78b'
        secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword) }>
            <Image source={!showPassword ? icons.eye : icons.eyeHide } className='w-6 h-6' resizeMode="contain"  />
            
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFied;
