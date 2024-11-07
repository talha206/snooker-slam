import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";

const CancelAlert = () => {
  const nav = useNavigation();

  const handleCancelNavigate = () => {
    nav.navigate("GettingStarted");
  };

  const handleCancel = () => {
    Alert.alert(
      "Are you sure you want to cancel?",
      "Some of your data might be lost",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => handleCancelNavigate(),
        },
      ]
    );
  };
  return (
    <TouchableOpacity onPress={() => handleCancel()}>
      <Icon
        name="close-circle-outline"
        size={32}
        color={Colors.white}
        type="material-community"
      />
    </TouchableOpacity>
  );
};

export default CancelAlert;
