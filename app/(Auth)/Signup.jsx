import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFied from "../../components/FormFied";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitting, isSubmitting] = useState(false);
  const navigation = useNavigation();
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
          // isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100">
           Have an account already?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text className="text-secondary text-lg ">Sign Up</Text>
            </TouchableOpacity>
   
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
