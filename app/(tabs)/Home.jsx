import { View, Text, SafeAreaView, FlatList, RefreshControl, Alert } from "react-native";
import React, {useState, useEffect} from "react";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPost } from "../../lib/appwrite";
// import useAppwrite from "../../lib/useAppwrite";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const [refresh, setRefresh] = useState(false)
  


  useEffect(() => {
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
    fetchData();
  }, []);

  const refetch = () => fetchData()
  // return { data };

  console.log(data)



  const onRefresh = async () => {
    setRefresh(true)
    // recall video

    await refetch()
    setRefresh(false)

  }

  return (
    <SafeAreaView className="bg-primary h-full  ">
      <View className="p-1 mt-1">
        <FlatList
          data={data}
          // data={[]}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <Text className="text-2xl text-white ">{item.title}</Text>
          )}
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
                <Trending post={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
              </View>
            </View>
          )}
          ListEmptyComponent={() => <EmptyState
            title='No Video Found'
            subtitle='No videos created yet on this topic'
            />}
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
