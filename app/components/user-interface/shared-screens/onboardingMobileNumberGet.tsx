import React from "react";
import TextInput from "@/app/components/user-interface/textInput";
import useScreenSize from "@/hooks/useScreenSize";
import { FormBuilder } from "react-native-bbs-form-builder";
import { useForm } from "react-hook-form";
import ScreenLayout, { styles } from "../../layouts/screenLayout";
import { Checkbox } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import { View, Text, TouchableOpacity } from "react-native";

interface OnboardingMobileNumberGetProps {
  handleFormSubmit: any;
  title?: string;
  subTitle?: string;
  loading?: boolean;
  actionBtnLabel?: string;
}

const OnboardingMobileNumberGet: React.FC<OnboardingMobileNumberGetProps> = ({
  handleFormSubmit,
  title = "Mobile Number?",
  subTitle = "Enter your mobile number below",
  actionBtnLabel = "Register",
}: OnboardingMobileNumberGetProps) => {
  const { isSmall } = useScreenSize();

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      phoneNo: "",
      checked: false,
    },
    mode: "onChange",
  });

  return (
    <ScreenLayout
      title={title}
      subTitle={subTitle}
      actionBtnLabel={actionBtnLabel}
      onSubmit={handleSubmit(handleFormSubmit)}
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
              name: "phoneNo",
              rules: {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /^3[0-9]{9}$/,
                  message: "Please enter a valid phone number",
                },
              },
              textInputProps: {
                keyboardType: "numeric",
                placeholder: "3xxxxxxxx",
              },
            },
          ]}
        />

        <View style={styles.checkContainer}>
          <Checkbox.Android
            status={"checked"}
            onPress={() => {}}
            color={Colors.primary}
            uncheckedColor={Colors.white}
            style={styles.checkbox}
          />
          <View style={styles.checkLabel}>
            <Text style={styles.text}>Agree to the</Text>
            <TouchableOpacity>
              <Text style={styles.checkLink}>Terms of Use</Text>
            </TouchableOpacity>
            <Text style={styles.text}>and</Text>
            <TouchableOpacity>
              <Text style={styles.checkLink}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default OnboardingMobileNumberGet;
