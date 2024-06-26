import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, {useState} from "react";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refresh, setRefresh] = useState(false)

  const onRefresh = async () => {
    setRefresh(true)
    // recall video
  }
 
  return (
    <SafeAreaView className="bg-primary h-full  ">
      <View className="p-1 mt-1">
        <FlatList
          // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          data={[]}
          keyExtractor={(item) => item.id.toLocaleString()}
          renderItem={({ item }) => (
            <Text className="text-2xl text-white ">{item.id}</Text>
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
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
