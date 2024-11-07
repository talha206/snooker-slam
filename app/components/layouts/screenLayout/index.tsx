import React, { ReactNode, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import BlurBallsBackground from "@/app/components/backgrounds/blurBallsBackground";
import { Colors } from "@/constants/Colors";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import Button from "@/app/components/user-interface/button";
import Stepper from "@/app/components/user-interface/stepper";
import CancelAlert from "@/app/components/user-interface/cancelAlert";
import useScreenSize from "@/hooks/useScreenSize";
import BackButton from "@/app/components/user-interface/backButton";
import { Spacing } from "@/constants/Spacing";

interface ScreenLayoutProps {
  title: string;
  subTitle: string;
  children: ReactNode;
  actionBtnLabel?: string;
  onSubmit: (formData: any) => void;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  title,
  subTitle,
  children,
  actionBtnLabel = "Next",
  onSubmit,
}) => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();
  const canGoBack = useNavigationState((state) => state.index > 0);

  const handleBack = () => {
    nav.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.screen, isSmall && styles.smallScreen]}>
        <BlurBallsBackground>
          <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, isSmall && styles.smallContainer]}>
              <View style={styles.cancelButton}>
                <CancelAlert />
              </View>

              <View style={[styles.header, isSmall && styles.smallHeader]}>
                <Text style={[styles.title, isSmall && styles.smallTitle]}>
                  {title}
                </Text>
                <Text
                  style={[styles.infoText, isSmall && styles.smallInfoText]}
                >
                  {subTitle}
                </Text>
              </View>

              {/***********************/}
              {/* MAIN FORM  START*/}
              {/***********************/}
              {children}
              {/***********************/}
              {/* MAIN FORM  END*/}
              {/***********************/}

              {/***********************/}
              {/* SUBMISSION CONTROL START*/}
              {/***********************/}
              <View
                style={[
                  styles.actionContainer,
                  isSmall && styles.smallActionContainer,
                ]}
              >
                <View>
                  <View
                    style={[
                      styles.buttonsContainer,
                      isSmall && styles.smallButtonsContainer,
                    ]}
                  >
                    {canGoBack && <BackButton onPress={handleBack} />}
                    <Button
                      style={styles.button}
                      mode="contained"
                      onPress={onSubmit}
                    >
                      {actionBtnLabel}
                    </Button>
                  </View>
                  <View style={styles.stepperContainer}>
                    <Stepper noOfSteps={4} activeStep={0} />
                  </View>
                </View>
              </View>
              {/***********************/}
              {/* SUBMISSION CONTROL END*/}
              {/***********************/}
            </View>
          </SafeAreaView>
        </BlurBallsBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  smallScreen: {
    marginHorizontal: 10,
  },
  safeArea: {
    flex: 1,
    marginHorizontal: Spacing.medium,
    paddingBottom: Platform.OS === "ios" ? 30 : 20,
  },
  container: {
    marginTop: 10,
    width: "100%",
  },
  smallContainer: {
    paddingHorizontal: 16,
  },
  cancelButton: {
    alignSelf: "flex-end",
    marginTop: Platform.OS === "android" ? 32 : 0,
  },
  header: {
    marginTop: 16,
  },
  smallHeader: {
    marginTop: 8,
  },
  title: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: "700",
  },
  smallTitle: {
    fontSize: 24,
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
  inputContainer: {
    marginTop: 50,
  },
  smallInputContainer: {
    marginTop: 30,
  },
  textInput: {
    width: "100%",
  },
  actionContainer: {
    position: "absolute",
    top: Platform.OS === "ios" ? 600 : 500,
    width: "100%",
  },
  smallActionContainer: {
    bottom: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  smallButtonsContainer: {
    gap: 4,
  },
  stepperContainer: {
    marginTop: 56,
  },
  button: {
    flex: 1,
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  checkbox: {
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
    borderWidth: 2,
  },
  checkLabel: {
    flexDirection: "row",
    gap: 4,
  },
  checkLink: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  text: {
    color: Colors.white,
    fontSize: 14,
  },
  errorContainer: {
    height: 20,
    justifyContent: "center",
    marginTop: 5,
  },
  errorText: {
    color: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: Colors.primaryDark900,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 12,
  },
  error: {
    color: Colors.primary,
    fontSize: 16,
  },

  infoBox: {
    backgroundColor: Colors.gray[400],
    marginTop: 60,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.gray[200],
  },
  infoBoxInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoBoxText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  infoValue: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
