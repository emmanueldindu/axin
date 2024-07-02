import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFied from "../../components/FormFied";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { signIn, getCurrentUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [submitting, isSubmitting] = useState(false);
  const navigation = useNavigation();
  const { setIsLoading, setUser, setIsLoggedIn } = useGlobalContext();


  const handleSignIn = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill out all the fields');
      return;
    }

    isSubmitting(true);
    setIsLoading(true);

    try {
      await signIn(form.email, form.password);
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        navigation.navigate('ButtonTab');
      } else {
        Alert.alert('Error', 'Failed to get user details');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      isSubmitting(false);
      setIsLoading(false);
    }
  };




  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{ justifyContent: "center" }}
        className="w-full   px-4 my-6  min-h-[85vh]"
      >
        <Text className="text-3xl  text-white font-semibold">
          Ax<Text className="text-[#FFB500]">Vid</Text>
        </Text>

        <Text className="text-white text-2xl font-semibold mt-10 ">
          Log in to Ax<Text className="">Vid</Text>
        </Text>

        <FormFied
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />

        <FormFied
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title={"Sign In"}
          continerStyles={"mt-7"}
          handlePress={handleSignIn}
          // isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100">
            Don't have account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text className="text-secondary text-lg ">Sign Up</Text>
            </TouchableOpacity>
   
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
