import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import icons from '../constants/icons';

const SearchInput = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
  }) => {
  
      const [showPassword, setShowPassword] = useState(false)
    return (

        <View className="w-full h-16 bg-black-100  rounded-xl px-6 focus:border-secondary space-x-4 items-center flex-row">
          <TextInput
          className='flex-1 h-full mt-0.5 w-full text-white font-semibold'
          value={value}
          placeholder='Search for a video topic'
          onChangeText={handleChangeText}
          placeholderTextColor='#7b7b8b'
          secureTextEntry={title === 'Password' && !showPassword}
          />
  
          <TouchableOpacity >
            <Image 
            source={icons.search}
            className='h-5 w-5'
            resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
  
    );
  };


export default SearchInput