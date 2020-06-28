import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

export default function WeekGoals(props) {
  const [tasks] = useState([
    { name: "wash my cat", duration: 0.5, key: "1" },
    { name: "write essay", duration: 2, key: "2" },
    { name: "make presentation for the class tomorrow", duration: 3, key: "3" },
    { name: "call parents", duration: 0.5, key: "4" },
    { name: "go on a date", duration: 4, key: "5" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>WEEK</Text>
        <Text>June 21 - 27</Text>
      </View>
      <View style={styles.icons}>
        <Image
          source={require("../assets/images/task.png")}
          style={styles.taskImage}
        />
        <Image
          source={require("../assets/images/time.png")}
          style={styles.timeImage}
        />
      </View>
      <View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Text key={item.key}>{item.name}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#76CEC4",
    height: 75,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeImage: {
    padding: 10,
    margin: 10,
    height: 50,
    width: 50,
  },
  taskImage: {
    padding: 10,
    margin: 10,
    height: 60,
    width: 60,
  },
});
