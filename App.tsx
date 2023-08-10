import { StatusBar } from "expo-status-bar";
import * as Notification from "expo-notifications";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="check"
        onPress={() => Notification.getPermissionsAsync().then(console.log)}
      />
      <StatusBar style="auto" />
    </View>
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
