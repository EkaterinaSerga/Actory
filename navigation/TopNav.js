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
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        labelStyle: { fontSize: 16 },
        activeTintColor: "#6A706E",
        inactiveTintColor: "#76CEC4",
        showIcon: "true",
        pressColor: "#76CEC4",
        tabStyle: { fontWeight: "bold" },
        style: { fontWeight: "bold" },
        fontWeight: "bold",
      }}
    >
      <Tab.Screen
        name="SideMenu"
        component={SideMenu}
        options={{
          tabBarLabel: "Side Menu",
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
