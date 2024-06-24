import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Layout from "./app/Layout";
import Home from "./app/(tabs)/Home";
import ButtonTab from "./app/navigation/ButtonTab";
import Signin from "./app/(Auth)/Signin";
import Signup from "./app/(Auth)/Signup";
import GlobalProvider from "./context/GlobalProvider";

// com.odoi.axvid
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GlobalProvider>
   
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="index"
            component={Layout}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
           name="ButtonTab"
          component={ButtonTab}
          options={{headerShown: false}}
          ></Stack.Screen>

          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
</GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
