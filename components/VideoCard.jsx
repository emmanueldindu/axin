import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";

const VideoCard = ({
  video: {
    video,
    title,
    thumbnail,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className=" flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 item-start">
        <View className=" flex justify-center items-center flex-row flex-1">
          {/* avatar */}
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg "
              resizeMode="cover"
            />
          </View>

          {/* title and username */}
          <View className="flex justify-center flex-1 ml-3">
            <Text className="text-white font-semibold" numberOfLines={1}>
              {title}
            </Text>
            <Text
              className="text-xs text-gray-200 mt-1 font-[500] "
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
          </View>

          <View className="pb-2">
            <Image
              source={icons.menu}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </View>
          </View>
          {play ? (
            <Text>playing</Text>
          ) : ( 
            <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative  justify-center items-center"
            activeOpacity={0.3}
            onPress={() => setPlay(true)}
            >
              <Image
                source={{ uri: thumbnail }}
                className="w-full h-full rounded-xl mt-3 "
                resizeMode="cover"
              />
              <Image source={icons.play} className='w-12 h-12 absolute' resizeMode="cover"/>
            </TouchableOpacity>
          )}
        
     
    </View>
  );
};

export default VideoCard;
