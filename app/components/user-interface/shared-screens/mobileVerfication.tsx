import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import useScreenSize from "@/hooks/useScreenSize";
import { useForm } from "react-hook-form";
import CodeInput from "@/app/components/user-interface/codeInput";
import { Colors } from "@/constants/Colors";
import Button from "@/app/components/user-interface/button";
import ScreenLayout, { styles } from "../../layouts/screenLayout";

const MobileVerification = ({
  btnLabel = "Continue",
  handlerPinChange,
  handlerFormSubmit,
}: {
  handlerFormSubmit: any;
  handlerPinChange: any;
  btnLabel?: string;
}) => {
  const { isSmall } = useScreenSize();
  const [timeLeft, setTimeLeft] = useState(120);
  const [resendAvailable, setResendAvailable] = useState(false);

  const {
    control,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      inputValue: "",
      checked: false,
    },
    mode: "onChange",
  });

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      setResendAvailable(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <ScreenLayout
      title="Verification"
      subTitle="We have sent OTP to your registered mobile number."
      actionBtnLabel={btnLabel}
      onSubmit={handlerFormSubmit}
    >
      <View
        style={[myStyles.pinContainer, isSmall && myStyles.smallPinContainer]}
      >
        <Text style={[styles.infoText, isSmall && myStyles.smallInfoText]}>
          Please type OTP here
        </Text>
        <View style={myStyles.codeInputContainer}>
          <CodeInput length={4} onChange={handlerPinChange} />
        </View>
      </View>

      <View style={myStyles.timerContainer}>
        {resendAvailable ? (
          <TouchableOpacity
            onPress={() => {
              setTimeLeft(120);
              setResendAvailable(false);
            }}
          >
            <View style={myStyles.forgetPinButton}>
              <Button mode="text">Resend OTP</Button>
            </View>
          </TouchableOpacity>
        ) : (
          <Text
            style={[
              myStyles.infoTextExpire,
              isSmall && myStyles.smallInfoTextExpire,
            ]}
          >
            OTP will expire in {formatTime(timeLeft)}
          </Text>
        )}
      </View>
    </ScreenLayout>
  );
};

const myStyles = StyleSheet.create({
  infoTextExpire: {
    color: Colors.gray.light,
    marginTop: 50,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },

  forgetPinButton: {
    alignSelf: "flex-end",
  },

  smallInfoTextExpire: {
    fontSize: 14,
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

  smallInfoText: {
    fontSize: 14,
  },

  placeholderErrorText: {
    fontSize: 14,
    marginTop: 5,
    opacity: 0,
  },

  timerContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  resendOtpText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MobileVerification;
