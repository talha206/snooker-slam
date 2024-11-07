import React from "react";
import { View, StyleSheet, Text } from "react-native";
import useScreenSize from "@/hooks/useScreenSize";
import { useForm } from "react-hook-form";
import CodeInput from "@/app/components/user-interface/codeInput";
import { Colors } from "@/constants/Colors";
import ScreenLayout from "../../layouts/screenLayout";

const PinSetup = ({
  handlerPinChange,
  handlerFormSubmit,
  btnLabel,
}: {
  btnLabel: string;
  handlerPinChange: any;
  handlerFormSubmit: any;
}) => {
  const { isSmall } = useScreenSize();

  const {
    formState: { errors },
  } = useForm({
    defaultValues: {
      inputValue: "",
      checked: false,
    },
    mode: "onChange",
  });

  return (
    <ScreenLayout
      title="Setting Up PIN code"
      subTitle="Setup your PIN by creating a 4 digit code."
      actionBtnLabel={btnLabel}
      onSubmit={handlerFormSubmit}
    >
      <View>
        <View
          style={[myStyles.pinContainer, isSmall && myStyles.smallPinContainer]}
        >
          <Text style={[myStyles.infoText, isSmall && myStyles.smallInfoText]}>
            PIN Code
          </Text>
          <View style={myStyles.codeInputContainer}>
            <CodeInput length={4} onChange={handlerPinChange} />
          </View>
        </View>
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

  infoText: {
    color: Colors.gray.light,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
  },

  smallInfoText: {
    fontSize: 14,
  },

  placeholderErrorText: {
    fontSize: 14,
    marginTop: 5,
    opacity: 0,
  },

  errorContainer: {
    height: 20,
  },

  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});

export default PinSetup;
