import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import BlurBallsBackground from "@/app/components/backgrounds/blurBallsBackground";
import { Colors } from "@/constants/Colors";
import Button from "@/app/components/user-interface/button";
import useScreenSize from "@/hooks/useScreenSize";
import { Spacing } from "@/constants/Spacing";
import { GestureResponderEvent } from "react-native";

interface PaymentStatusProps {
  icon: any;
  title: string;
  description: string;
  handlerContinue: any;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({
  icon,
  title,
  description,
  handlerContinue,
}) => {
  const { isSmall } = useScreenSize();

  const onPressInternal = (e: GestureResponderEvent) => {
    handlerContinue();
  };

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
              {icon}
              <View style={styles.messageContent}>
                <Text style={[styles.title, isSmall && styles.smallTitle]}>
                  {title}
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
                  onPress={onPressInternal}
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
    height: 200,
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
    bottom: 100,
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

export default PaymentStatus;
