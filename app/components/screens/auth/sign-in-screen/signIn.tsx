import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";

import { Colors } from "@/constants/Colors";
import useScreenSize from "@/hooks/useScreenSize";

import ScreenLayout from "@/app/components/layouts/screenLayout";
import { styles } from "@/app/components/layouts/screenLayout";
import CodeInput from "@/app/components/user-interface/codeInput";
import TextInput from "@/app/components/user-interface/textInput";
import Button from "@/app/components/user-interface/button";

import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { useNavigation } from "@react-navigation/native";
import {
  selectPhoneNo,
  selectPin,
  selectError,
  selectStatus,
  submitSignInAsync,
  setPhoneNo,
  setPin,
  selectAccessToken,
  setAccessToken,
} from "./signInSlice";

import { fetchMe } from "@/app/components/app-container/appContainerSlice";

const SignInScreen: React.FC = () => {
  const { isSmall } = useScreenSize();
  const dispatch = useAppDispatch();
  const phoneNo = useAppSelector(selectPhoneNo);
  const pin = useAppSelector(selectPin);
  const error = useAppSelector(selectError);
  const status = useAppSelector(selectStatus);
  const accessToken = useAppSelector(selectAccessToken);
  const isLoading = status === "loading";
  const nav = useNavigation();

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

  const navigateToForgotPin = async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.ForgotPin);
  };

  const navigateToSignup = async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.Role);
  };

  const handleFormSubmit = () => {
    dispatch(submitSignInAsync({ phoneNo: `+92${phoneNo}`, pin }));
  };

  const changePhoneHandler = (value: string) => {
    dispatch(setPhoneNo(value));
  };

  const changePinHandler = (value: string) => {
    dispatch(setPin(value));
  };

  useEffect(() => {
    if (accessToken) {
      // this will trigger role based navigator via AppContainer
      dispatch(fetchMe());
    }

    // Cleanup function to clear access token on component unmount
    return () => {
      // Call the function to clear access token in local state after component is destroyed
      // so that when we land again on it after logout, our old accesstoken local state is cleared and we get new token via login
      dispatch(setAccessToken(""));
      dispatch(setPin(""));
      dispatch(setPhoneNo(""));
    };
  }, [accessToken, dispatch]);

  return (
    <ScreenLayout
      title={"Hey Mate,\nWelcome Back"}
      subTitle="Enter your mobile number and PIN to login."
      actionBtnLabel={isLoading ? "please wait..." : "Login"}
      onSubmit={handleFormSubmit}
    >
      <View
        style={[styles.inputContainer, isSmall && styles.smallInputContainer]}
      >
        <TextInput
          keyboardType={"number-pad"}
          placeholder={"3xxxxxxxxxx"}
          value={phoneNo}
          onChangeText={changePhoneHandler}
          maxLength={10}
        />
      </View>
      <View
        style={[myStyles.pinContainer, isSmall && myStyles.smallPinContainer]}
      >
        <Text style={[styles.infoText, isSmall && styles.smallInfoText]}>
          Please enter 4 digit PIN
        </Text>
        <View
          style={[
            myStyles.codeInputContainer,
            isSmall && myStyles.smallCodeInputContainer,
          ]}
        >
          <CodeInput length={4} onChange={changePinHandler} />
        </View>
        <View style={myStyles.forgetPinButton}>
          <Button mode="text" onPress={() => navigateToForgotPin()}>
            Forgot your PIN?
          </Button>
        </View>
      </View>
      <View>
        <View style={myStyles.actionBox}>
          <Text
            style={[myStyles.actionText, isSmall && myStyles.smallActionText]}
          >
            Don't have an account?
          </Text>
          <Button
            mode="text"
            onPress={() => {
              navigateToSignup();
            }}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default SignInScreen;

const myStyles = StyleSheet.create({
  placeholderErrorText: {
    fontSize: 14,
    marginTop: 5,
    opacity: 0,
  },
  pinContainer: {
    marginTop: 16,
  },
  smallPinContainer: {
    marginTop: 8,
  },
  codeInputContainer: {
    marginTop: 16,
  },
  smallCodeInputContainer: {
    marginTop: 8,
  },
  forgetPinButton: {
    alignSelf: "flex-end",
  },
  actionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  actionText: {
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: "500",
  },
  smallActionText: {
    fontSize: 14,
  },
});
