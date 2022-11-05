import { StatusBar } from "expo-status-bar";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";
import { User } from "../interfaces/user";

interface UserModalProps {
  user: User;
  visible: boolean;
  onCloseModal: () => void;
}

export default function UserModal(props: UserModalProps) {
  const { user, visible, onCloseModal } = props;
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <StatusBar style="auto" />
        <View style={styles.modalTop}>
          <Text style={styles.modalText}>{user.name}</Text>
        </View>
        <View style={styles.modalCenter}>
          <Image source={require("../assets/images/blank_profile.png")} />
        </View>
        <View style={styles.modalBottom}>
          <Button title="Close" onPress={onCloseModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTop: {
    flex: 1,
    justifyContent: "center",
  },
  modalText: {
    color: "white",
  },
  modalCenter: {
    flex: 5,
  },
  modalBottom: {
    flex: 1,
  },
});
