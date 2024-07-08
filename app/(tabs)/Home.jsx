import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPost, getLatestPost } from "../../lib/appwrite";
import VideoCard from "../../components/VideoCard";
// import useAppwrite from "../../lib/useAppwrite";

const Home = () => {
  const [data, setData] = useState([]);
  const [latestPost, setLatestPost] = useState([])
  const [loading, setIsLoading] = useState(true);

  const [refresh, setRefresh] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await getAllPost();
      setData(response);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    fetchPost()
  }, []);


  const fetchPost = async () => {
    setIsLoading(true);

    try {
      const response = await getLatestPost()
      setLatestPost(response)
    } catch (error) {
      Alert.alert(error.message);
    }finally {
      setIsLoading(false)
    }
  }



  const refetch = () => fetchData();
  // return { data };

  console.log(latestPost);

  const onRefresh = async () => {
    setRefresh(true);
    // recall video

    await refetch();
    setRefresh(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full  ">
      <View className="p-1 mt-1">
        <FlatList
          data={data}
          // data={[]}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => <VideoCard video={item} />}
          ListHeaderComponent={() => (
            <View className="my-6 px-4  space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="text-sm text-gray-100">Welcome Back</Text>
                  <Text className="text-2xl font-semibold text-white">
                    Odoi
                  </Text>
                </View>
              </View>
              <SearchInput />
              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-100">Latest Videos</Text>
                <Trending posts={latestPost ?? []} />
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Video Found"
              subtitle="No videos created yet on this topic"
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
