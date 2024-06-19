import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
<TouchableOpacity className='bg-white rounded-xl justify-center items-center'>

  <Text className='text-primary font-semibold text-lg'>CustomButton</Text>
</TouchableOpacity>
  
  )
}

export default CustomButton