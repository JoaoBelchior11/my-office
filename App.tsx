import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserList from "./components/UserList";
import { User } from "./interfaces/user";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const usersJson: User[] = require("./mocks/user-list.json");
    setUsers(usersJson);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <Text>My Office</Text>
      </View>
      <View style={styles.main}>
        <UserList users={users} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
    padding: 20,
  },
  head: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 5,
  },
});
