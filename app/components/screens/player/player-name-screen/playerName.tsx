import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { FormBuilder } from "react-native-bbs-form-builder";
import { useForm } from "react-hook-form";
import { styles } from "../../../layouts/screenLayout";
import ScreenLayout from "../../../layouts/screenLayout";
import TextInput from "@/app/components/user-interface/textInput";
import useScreenSize from "@/hooks/useScreenSize";

const PlayerName = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();
  const [loading] = useState(false);

  const navtoPlayerUsername = async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.playerUsername);
  };

  const {
    control,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      inputValue: "",
      checked: false,
    },
    mode: "onChange",
  });

  const inputKeyboardType = "default";
  const maxLenght = undefined;

  return (
    <ScreenLayout
      title="What is your your name?"
      subTitle="Enter your  name below."
      onSubmit={navtoPlayerUsername}
    >
      <View
        style={[styles.inputContainer, isSmall && styles.smallInputContainer]}
      >
        <FormBuilder
          control={control}
          setFocus={setFocus}
          CustomTextInput={TextInput}
          formConfigArray={[
            {
              type: "text",
              name: "club_name",
              rules: {
                required: {
                  value: true,
                  message: "",
                },
              },
              textInputProps: {
                keyboardType: inputKeyboardType,
                placeholder: "John Doe...",
                maxLength: maxLenght,
              },
            },
          ]}
        />
        <View style={styles.errorContainer}>
          {errors.inputValue && (
            <Text style={styles.error}>This Field is required</Text>
          )}
        </View>
        {loading && (
          <ActivityIndicator animating={loading} size="large" color="#b50000" />
        )}
      </View>
    </ScreenLayout>
  );
};

export default PlayerName;