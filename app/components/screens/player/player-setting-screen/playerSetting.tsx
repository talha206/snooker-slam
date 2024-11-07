import React from 'react';
import SettingsBox from '../../../user-interface/common/settings-box';
import useScreenSize from '@/hooks/useScreenSize';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import { Colors } from '@/constants/Colors';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';

const  PlayerSetting = () => {
  const { isSmall } = useScreenSize();
  
  const settingList = [
    {
        title: 'Change PIN Code',
        route: `ChangePlayerPin`
    },
  ]

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Setting</Text>
                <View style={styles.infoContainer} >
                    <SettingsBox settingList={settingList} />
                    <View style={styles.box} >
                        <Text style={styles.contentTitle} >Why Change PIN?</Text>
                        <Text style={styles.content} >Regularly changing your PIN keeps your account secure. If you think someone else might know your PIN or if it’s been a while since your last update, changing it helps protect your information and ensures only you have access.</Text>
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
  contentTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    marginTop: 12,
    marginBottom: 20,
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'justify',
  }
});

export default PlayerSetting;