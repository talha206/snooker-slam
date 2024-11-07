import GradientTopBackground from '@/app/components/backgrounds/gradientTopBackground';
import InfoBox from '@/app/components/user-interface/common/info-box';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import useScreenSize from '@/hooks/useScreenSize';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

const CompleteInfoScreen = () => {
  const { isSmall } = useScreenSize();

  const clubName = [
    {
        title: 'Club Name',
        value: 'Ball Smashers'
    },
  ]
  const personalInfo = [
    {
        title: 'Name',
        value: 'John Doe'
    },
    {
        title: 'Mobile Number',
        value: '+92000000000'
    },
  ]

  const sharedInfo = [
    {
        title: 'No of Clubs',
        value: 10,
    },
    {
        title: 'Email Address',
        value: 'club@snookerslam.com',
    },
    {
        title: 'CNIC',
        value: 'Not Added',
    },
    {
        title: 'City',
        value: 'Lahore',
    },
    {
        title: 'Area',
        value: 'Wapda Town',
    },
  ]

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Ball Smahers</Text>
                <Text style={styles.infoText} >All info about club is listed below.</Text>
                <View style={styles.infoContainer} >
                    <InfoBox infoList={clubName} />
                    <InfoBox infoList={personalInfo} />
                    <InfoBox infoList={sharedInfo} />
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
    gap: 10,
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

export default CompleteInfoScreen;