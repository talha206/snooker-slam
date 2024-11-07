import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "@/app/components/user-interface/textInput";
import { FormBuilder } from "react-native-bbs-form-builder";
import { useForm } from "react-hook-form";
import useScreenSize from "@/hooks/useScreenSize";
import ScreenLayout, { styles } from "@/app/components/layouts/screenLayout";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import { setClubOwnerName, selectClubOwnerName } from "./clubOwnerNameSlice";

const ClubOwnerNameScreen = () => {
  const { isSmall } = useScreenSize();
  const dispatch = useAppDispatch();
  const nav = useNavigation();
  const clubOwnerName = useAppSelector(selectClubOwnerName);

  const {
    control,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clubOwnerName,
    },
    mode: "onChange",
  });

  const navToOwnerContact = async (data: any) => {
    dispatch(setClubOwnerName(data.clubOwnerName));
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.OwnerContact);
  };

  return (
    <ScreenLayout
      title="What is your name?"
      subTitle="Please enter your name below."
      onSubmit={handleSubmit(navToOwnerContact)}
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
              name: "clubOwnerName",
              rules: {
                required: {
                  value: true,
                  message: "This Field is required",
                },
              },
              textInputProps: {
                keyboardType: "default",
                placeholder: "Ali Ahmed...",
              },
            },
          ]}
        />
      </View>
    </ScreenLayout>
  );
};

export default ClubOwnerNameScreen;
