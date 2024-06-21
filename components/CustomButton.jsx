import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, continerStyles, textStyles, isLoading }) => {
  return (
<TouchableOpacity
className={`bg-secondary rounded-xl justify-center items-center ${continerStyles} ${isLoading ? 'opacity-50' : ''}`}
onPress={handlePress}
disabled={isLoading}
activeOpacity={0.7}
>

  <Text className='text-primary font-semibold text-lg'>CustomButton</Text>
</TouchableOpacity>
  
  )
}

export default CustomButton