import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
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
        <FlatList
          keyExtractor={(user) => user.name}
          data={users}
          renderItem={({ item }) => (
            <UserCard user={item} onUserPress={() => handleUserPress(item)} />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,

    width: "90%",
  },
});
