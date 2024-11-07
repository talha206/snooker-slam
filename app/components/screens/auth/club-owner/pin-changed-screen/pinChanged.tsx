import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import BlurBallsBackground from '@/app/components/backgrounds/blurBallsBackground';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Button from '@/app/components/user-interface/button';
import { Spacing } from '@/constants/Spacing';
import { Platform } from 'react-native';
import useScreenSize from '@/hooks/useScreenSize';
const ClubOwnerPinChangedScreen = () => {
  const nav = useNavigation();
  const { isSmall } = useScreenSize();

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <BlurBallsBackground>
        <SafeAreaView style={styles.safeArea}>
          <View style={[styles.container, isSmall && styles.smallContainer]}>
            <View style={styles.messageContainer}>
              <Image 
                source={require('@/assets/images/pin-changed.png')} 
                style={[styles.messageImg, isSmall && styles.smallMessageImg]} 
              />
              <View style={styles.messageContent}>
                <Text style={[styles.title, isSmall && styles.smallTitle]}>PIN Changed!</Text>
                <Text style={[styles.infoText, isSmall && styles.smallInfoText]}>
                  Your PIN has been changed successfully.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.actionContainer, isSmall && styles.smallActionContainer]}>
            <View>
              <View style={styles.buttonsContainer}>
                <Button 
                  style={styles.button}
                  mode='contained' 
               //   onPress={undefined}
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
    width: '100%',
  },
  smallContainer: {
    paddingHorizontal: 16,
  },
  messageContainer: {
    marginTop: 120,
  },
  messageContent: {
    marginTop: 30,
  },
  messageImg: {
    width: 150,
    height: 160,
    alignSelf: 'center',
  },
  smallMessageImg: {
    width: 120,
    height: 130,
  },
  title: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
  smallTitle: {
    fontSize: 24,
  },
  infoText: {
    color: Colors.gray.light,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 25,
  },
  smallInfoText: {
    fontSize: 14,
  },
  actionContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 150 : 100,
    right: 0,
    width: '100%',
  },
  smallActionContainer: {
    bottom: 70,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    flex: 1,
  },
  smallButton: {
    fontSize: 14,
  },
});

export default ClubOwnerPinChangedScreen;