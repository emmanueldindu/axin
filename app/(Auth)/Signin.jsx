import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFied from "../../components/FormFied";
import CustomButton from "../../components/CustomButton";

const Signin = () => {
  const[form, setForm] = useState({
    email: "",
    password: "",
  });
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
        title={'Sign In'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
