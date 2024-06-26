import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import SearchInput from '../../components/SearchInput'

const Home  = () => {
  return (
<SafeAreaView className='bg-primary  '>
<View className='p-1 mt-1'>
<FlatList 
    data={[{id: 1}, {id: 2}, {id: 3}]}
    keyExtractor={(item) => item.id.toLocaleString()}
    renderItem={({item }) => (
      <Text className='text-2xl'>{item.id}</Text>
    )}
    ListHeaderComponent={() => (
      <View className='my-6 px-4  space-y-6'>
        <View className='justify-between items-start flex-row mb-6'>
          <View>
            <Text className='text-sm text-gray-100'>
              Welcome Back
            </Text>
            <Text className='text-2xl font-semibold text-white'>
              Odoi
            </Text>
          </View>

        </View>
          <SearchInput />
      </View>
    )}

/>
</View>
</SafeAreaView>

  )
}

export default Home