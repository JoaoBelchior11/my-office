import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { User } from "../interfaces/user";
import UserCard from "./UserCard";
import UserModal from "./UserModal";

interface UserListProps {
  users: User[];
}

const defaultEmptyUser: User = {
  name: "",
  picture: "",
};

export default function UserList(props: UserListProps) {
  const { users } = props;
  const [selectedUser, setSelectedUser] = useState<User>(defaultEmptyUser);
  const [showModal, setShowModal] = useState(false);
  const handleUserPress = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(defaultEmptyUser);
  };
  return (
    <>
      <UserModal
        visible={showModal}
        user={selectedUser}
        onCloseModal={handleCloseModal}
      />
      <View style={styles.container}>
        {users.map((user) => (
          <UserCard
            key={user.name}
            user={user}
            onUserPress={() => handleUserPress(user)}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,

    flexWrap: "wrap",
    flex: 4,
  },
});
