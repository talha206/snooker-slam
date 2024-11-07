import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import BlurBallsBackground from "@/app/components/backgrounds/blurBallsBackground";
import { Colors } from "@/constants/Colors";
import Button from "@/app/components/user-interface/button";
import useScreenSize from "@/hooks/useScreenSize";
import { Spacing } from "@/constants/Spacing";
import { Platform } from "react-native";

interface AccountCreatedProps {
  heading: string;
  description: string;
  handlerContinue: any;
}

const AccountCreated: React.FC<AccountCreatedProps> = ({
  heading,
  description,
  handlerContinue,
}) => {
  const { isSmall } = useScreenSize();

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <BlurBallsBackground>
        <SafeAreaView style={styles.safeArea}>
          <View style={[styles.container, isSmall && styles.smallContainer]}>
            <View
              style={[
                styles.messageContainer,
                isSmall && styles.smallMessageContainer,
              ]}
            >
              <Image
                source={require("@/assets/images/check-circle.png")}
                style={[styles.messageImg, isSmall && styles.smallMessageImg]}
              />
              <View style={styles.messageContent}>
                <Text style={[styles.title, isSmall && styles.smallTitle]}>
                  {heading}
                </Text>
                <Text
                  style={[styles.infoText, isSmall && styles.smallInfoText]}
                >
                  {description}
                </Text>
              </View>
            </View>
          </View>
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
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={handlerContinue}
                >
                  Continue
                </Button>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </BlurBallsBackground>
    </View>
  );
};

export default AccountCreated;

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
  },
  container: {
    marginTop: 10,
    width: "100%",
  },
  smallContainer: {
    paddingHorizontal: 16,
  },
  messageContainer: {
    marginTop: 120,
  },
  smallMessageContainer: {
    marginTop: 80,
  },
  messageContent: {
    marginTop: 30,
  },
  messageImg: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  smallMessageImg: {
    width: 120,
    height: 120,
  },
  title: {
    color: Colors.white,
    textAlign: "center",
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
    textAlign: "center",
    lineHeight: 25,
  },
  smallInfoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  actionContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 140 : 100,
    right: 0,
    width: "100%",
  },
  smallActionContainer: {
    bottom: 70,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  smallButtonsContainer: {
    gap: 4,
  },
  button: {
    flex: 1,
  },
});
