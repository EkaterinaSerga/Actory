import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  CheckBox,
} from "react-native";

export default function WeekGoals() {
  const [tasks, setTasks] = useState([
    { name: "wash my cat", duration: 0.5, key: "1" },
    { name: "write essay", duration: 2, key: "2" },
    { name: "make presentation for the class tomorrow", duration: 3, key: "3" },
    { name: "call parents", duration: 0.5, key: "4" },
    { name: "go on a date", duration: 4, key: "5" },
    { name: "go on a date", duration: 4, key: "6" },
    { name: "go on a date", duration: 4, key: "7" },
    { name: "go on a date", duration: 4, key: "8" },
    { name: "go on a date", duration: 4, key: "9" },
    { name: "go on a date", duration: 4, key: "10" },
    { name: "go on a date", duration: 4, key: "11" },
  ]);

  const pressHandler = (key) => {
    console.log("I got to pressHandler!!!");
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.key != key);
    });
  };

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
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CheckBox
                  onValueChange={() => pressHandler(item.key)}
                  title="Click Here"
                />
                <Text key={item.key}>{item.name}</Text>
              </View>

              <View>
                <Text style={{ flex: 1, justifyContent: "flex-end" }}>1 h</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#76CEC4",
    height: 75,
  },
  icons: {
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
  taskItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15,
  },
});
