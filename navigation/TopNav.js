import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyAccount from "../components/MyAccount";
import SideMenu from "../components/SideMenu";

const Tab = createMaterialTopTabNavigator();

export default function TopNav(props) {
  return (
    <Tab.Navigator
      initialRouteName="SideMenu"
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { width: 100 },
        style: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name="SideMenu"
        component={SideMenu}
        options={{ tabBarLabel: "SideMenu" }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ tabBarLabel: "MyAccount" }}
      />
    </Tab.Navigator>
  );
}
