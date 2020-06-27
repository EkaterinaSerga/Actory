import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
// import BottomTabNavigator from "../navigation/BottomTabNavigator";

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    state = {
      tasks: [
        { name: "wash dishes" },
        { name: "wash floors" },
        { name: "something else" },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <BottomTabNavigator props={this.props} /> */}
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    backgroundColor: "yellow",
  },
});
