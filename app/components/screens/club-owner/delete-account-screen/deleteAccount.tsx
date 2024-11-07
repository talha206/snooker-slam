import React from 'react';
import CodeInput from '../../../user-interface/codeInput';
import useScreenSize from '@/hooks/useScreenSize';
import Button from '../../../user-interface/button';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';
import { Colors } from "@/constants/Colors";

const DeleteAccount = () => {
  const { isSmall } = useScreenSize();

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Delete Account</Text>
                <View style={styles.infoContainer} >
                    <View>
                        <Text style={styles.infoText}>Please enter your PIN Code</Text>
                        <View style={styles.codeInputContainer}>
                            <CodeInput length={4} onChange={() => {}} />
                        </View>
                    </View>
                    <View style={styles.box} >
                        <Text style={styles.infoText}>You will loose all your data.</Text>
                    </View>
                    <View style={styles.buttonContainer} >
                        <Button mode='contained' onPress={() => {}} >Delete Account</Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
      </GradientTopBackground>
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
    marginTop: Spacing.large,
  },
  container: {
    marginTop: 10,
    width: '100%',
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: '700',
  },
  infoContainer: {
    marginTop: 20,
  },
  box: {
    marginTop: 20,
  },
  codeInputContainer: {
    marginTop: 16,
  },
  infoText: {
    color: Colors.gray.light,
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 40,
  }
  
});

export default DeleteAccount;