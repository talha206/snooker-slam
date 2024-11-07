import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "@/app/components/user-interface/textInput";
import { ActivityIndicator } from "react-native-paper";
import { FormBuilder } from "react-native-bbs-form-builder";
import { useForm } from "react-hook-form";
import useScreenSize from "@/hooks/useScreenSize";
import ScreenLayout, { styles } from "@/app/components/layouts/screenLayout";

const CNICScreen = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();
  const [loading, setLoading] = useState(false);

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

  const navToCityScreen = async () => {
    const { BaRouteNames } = await import("@/app/navigations-map/brand-ambassador/index.config");
    nav.navigate(BaRouteNames.CityScreen);
  };

  const inputKeyboardType = "default";
  const maxLenght = undefined;

  return (
    <ScreenLayout
      title="What is your CNIC?"
      subTitle="Enter your CNIC below."
      onSubmit={navToCityScreen}
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
                placeholder: "player@snookerslam.com",
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

export default CNICScreen;
