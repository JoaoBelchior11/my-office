import { Icon } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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

        <View style={styles.modalImageContainer}>
          <Image
            style={styles.modalImage}
            source={require("../assets/images/blank_profile.png")}
          />
        </View>
        <View style={styles.feedbackZone}>
          <Text style={styles.modalText}>Tell me something!</Text>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={5}
            editable
            blurOnSubmit
          />
          <Button title="Send" />
          <Text style={styles.modalText}>Send me a Prop!</Text>
          <Icon type="octicons" name="star" color="yellow" />
          <Icon type="octicons" name="flame" color="red" />
          <Icon type="octicons" name="bug" color="green" />
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
  },
  modalTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    color: "white",
  },

  modalBottom: {
    flex: 1,
  },
  modalImageContainer: {
    flex: 3,

    overflow: "hidden",
    borderRadius: 500,
    alignItems: "center",
    margin: 20,
  },
  modalImage: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  textInput: {
    backgroundColor: "#fff",
    padding: 10,
  },
  feedbackZone: {
    flex: 5,
  },
});
