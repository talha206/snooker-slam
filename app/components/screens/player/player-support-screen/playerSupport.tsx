import React from 'react';
import useScreenSize from '@/hooks/useScreenSize';
import InfoBox from '../../../user-interface/common/info-box';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';
import { Colors } from '@/constants/Colors';

const PlayerSupport = () => {
  const { isSmall } = useScreenSize();

  const supportInfo = [
    {
        title: 'Whatsapp',
        value: '+920000000000'
    },
    {
        title: 'Email',
        value: 'support@snookerslam.com'
    }
  ]

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Support</Text>
                <Text style={styles.infoText} >You can reach out to us by using following below.</Text>
                <View style={styles.infoContainer} >
                    <InfoBox infoList={supportInfo} />
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
  infoText: {
    marginTop: 14,
    marginBottom: 20,
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: '500',
  }
});

export default PlayerSupport;