import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import icons from "../constants/icons";
import { Video } from 'expo-av';


const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  }, 
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  console.log('active', activeItem, item.$id, item.video)

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (

<Video

source={{ uri: item.video }}

useNativeControls
resizeMode="contain"
shouldPlay
isLooping
/>

      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className="w-52 h-72  my-5 rounded-[35px] overflow-hidden shadow-lg"
            resizeMode="cover"
          />
          <Image source={icons.play} className='absolute h-12 w-12' resizeMode="contain"/>
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[1]);
  const viewableItemChange = ({viewableItems}) => {
    if(viewableItems.length > 0) {
        setActiveItem(viewableItems[0].key)

    }

  }  

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={viewableItemChange}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70

      }}
      contentOffset={{x: 170}}
    />
  );
};

export default Trending;
