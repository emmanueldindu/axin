import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFied from "../../components/FormFied";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { createUser, logout } from "../../lib/appwrite";
import { router } from "expo-router";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitting, isSubmitting] = useState(false);
  const navigation = useNavigation();

  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill out all the fields')
    }

    isSubmitting(true)
    

    try {
      const result = await createUser(form.email, form.password, form.username)
      navigation.navigate('ButtonTab')

    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      isSubmitting(false)
    }

  }  


  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert('Success', 'You have been logged out');
      navigation.navigate('Signin');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{ justifyContent: "center" }}
        className="w-full   px-4 my-6  min-h-[85vh]"
      >
        <Text className="text-3xl  text-white font-semibold">
          Ax<Text className="text-[#FFB500]">Vid</Text>
        </Text>

        <Text className="text-white text-2xl font-semibold mt-10 ">
          Sign up to Ax<Text className="">Vid</Text>
        </Text>


        <FormFied
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles="mt-7"
        
        />


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
          handlePress={submit}
          // isLoading={isSubmitting}
        />

        {/* <CustomButton 
        continerStyles={'mt-12'}
        title={'logout'}
        handlePress={handleLogout}
        /> */}

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100">
           Have an account already?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text className="text-secondary text-lg ">Sign Up</Text>
            </TouchableOpacity>
   
        </View>

        <View className="justify-center pt-5 flex-row gap-2">
       
            <TouchableOpacity onPress={handleLogout}>
              <Text className="text-gray-400 text-lg ">logout</Text>
            </TouchableOpacity>
   
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
