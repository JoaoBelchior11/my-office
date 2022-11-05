import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { User } from "../interfaces/user";

interface UserCardProps {
  user: User;
  onUserPress: () => void;
}

export default function UserCard(props: UserCardProps) {
  const { user, onUserPress } = props;
  return (
    <View key={user.name} style={styles.userCard}>
      <Pressable onPress={onUserPress}>
        <Image
          style={styles.userImage}
          source={require("../assets/images/blank_profile.png")}
        />
        <Text>{user.name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    margin: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
