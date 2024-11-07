import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInput from "@/app/components/user-interface/textInput";
import { FormBuilder } from "react-native-bbs-form-builder";
import { useForm } from "react-hook-form";
import useScreenSize from "@/hooks/useScreenSize";
import ScreenLayout, { styles } from "@/app/components/layouts/screenLayout";

import { selectClubName, setClubName } from "./clubNameSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";

const ClubName = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();
  const dispatch = useAppDispatch();
  const clubName = useAppSelector(selectClubName);

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      clubName,
    },
    mode: "onChange",
  });

  const navToClubOwnerNameScreen = async (data: any) => {
    dispatch(setClubName(data.clubName));
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.ClubOwnerName);
  };

  return (
    <ScreenLayout
      title="What is your club name?"
      subTitle="Please enter your club name below."
      onSubmit={handleSubmit(navToClubOwnerNameScreen)}
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
              name: "clubName",
              rules: {
                required: {
                  value: true,
                  message: "This Field is required",
                },
              },
              textInputProps: {
                keyboardType: "default",
                placeholder: "Snooker Slam...",
              },
            },
          ]}
        />
      </View>
    </ScreenLayout>
  );
};

export default ClubName;
