import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyAccount from "../components/MyAccount";
import SideMenu from "../components/SideMenu";

const Tab = createMaterialTopTabNavigator();

export default function TopNav(props) {
  console.log("TOP NAV PROPS", props.navigation);
  return (
    <Tab.Navigator
      initialRouteName="SideMenu"
      tabBarOptions={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        labelStyle: { fontSize: 16 },
        activeTintColor: "#76CEC4",
        inactiveTintColor: "#FFFFFF",
        showIcon: "true",
        pressColor: "#76CEC4",
        style: { backgroundColor: "#6A706E", weight: 1500 },
      }}
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="SideMenu"
        component={SideMenu}
        options={{
          tabBarLabel: "Goal Keeper",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ tabBarLabel: "My Account" }}
      />
    </Tab.Navigator>
  );
}
