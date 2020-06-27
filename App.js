import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, Text } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import TopNav from "./navigation/TopNav";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Root" component={BottomTabNavigator} />

            {/* <Stack.Screen name="Login">
              {(props) => <Login {...props} />}
            </Stack.Screen> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="UserPage" component={UserPage} />
            <Stack.Screen name="TopNav" component={TopNav} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf7f7",
  },
});
