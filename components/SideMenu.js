import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

export default function SideMenu() {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <View style={styles.weekContainer}>
          <Image
            source={require("../assets/images/plus.png")}
            style={styles.plusImage}
            onPress={() => this.props.navigation.navigate("WeekGoals")}
          />
          <Text style={styles.weekText}>WEEK</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.monthContainer}>
        <Image
          source={require("../assets/images/plus.png")}
          style={styles.plusImage}
        />
        <Text style={styles.monthText}>MONTH</Text>
      </View>
      <View style={styles.yearContainer}>
        <Image
          source={require("../assets/images/plus.png")}
          style={styles.plusImage}
        />
        <Text style={styles.yearText}>YEAR</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weekContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#76CEC4",
    borderRadius: 14,
  },
  weekText: {
    color: "#524C4C",
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
    alignSelf: "center",
  },
  monthContainer: {
    width: 250,
    height: 170,
    backgroundColor: "#CBEF43",
    borderRadius: 14,
  },
  monthText: {
    color: "#524C4C",
    fontSize: 40,
    fontWeight: "bold",
    padding: 20,
    alignSelf: "center",
  },
  yearContainer: {
    width: 350,
    height: 200,
    backgroundColor: "#6A706E",
    borderRadius: 14,
  },
  yearText: {
    color: "#FFFFFF",
    fontSize: 70,
    fontWeight: "bold",
    padding: 20,
    alignSelf: "center",
  },
  plusImage: {
    alignSelf: "flex-end",
    width: 30,
    height: 30,
  },
});
