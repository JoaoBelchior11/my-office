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
        <Text style={styles.mainText}>Give Feedback and Props!</Text>

        <UserList users={users} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#484f58",
    flex: 1,
    padding: 10,
  },
  head: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    marginBottom: 15,
    color: "#fff",
  },
});
