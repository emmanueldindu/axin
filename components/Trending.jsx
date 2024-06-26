import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
    <FlatList 
    data={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <Text className='text-white text-2xl'>{item.id}</Text>}
    horizontal

    />
  )
}

export default Trending