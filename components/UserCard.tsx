import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { User } from "../interfaces/user";

interface UserCardProps {
  user: User;
  onUserPress: () => void;
}

export default function UserCard(props: UserCardProps) {
  const { user, onUserPress } = props;
  return (
    <Pressable onPress={onUserPress}>
      <View key={user.name} style={styles.userCard}>
        <Image
          style={styles.userImage}
          source={require("../assets/images/blank_profile.png")}
        />
        <View style={styles.cardColumns}>
          <Text style={styles.columnLabel}>Name</Text>
          <Text style={styles.cardLabel}>{user.name}</Text>
        </View>
        <View style={styles.cardColumns}>
          <Text style={styles.columnLabel}>Department</Text>
          <Text>{user.department}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  userCard: {
    padding: 5,
    width: "100%",
    //borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  cardLabel: {
    marginHorizontal: 5,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  cardColumns: {
    alignItems: "center",
    flex: 1,
  },
  columnLabel: {
    color: "gray",
  },
});
