import React from 'react';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import InfoBox from '../../../user-interface/common/info-box';
import useScreenSize from '@/hooks/useScreenSize';
import Button from '../../../user-interface/button';
import SettingsBox from '../../../user-interface/common/settings-box';
import { Colors } from '@/constants/Colors';
import { View, StyleSheet, Text, ScrollView,  SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';

const TournamentInfo = () => {
  const { isSmall } = useScreenSize();

  const scheduleData = [
    {
      title: 'Date',
      value: '14th August'
    },
    {
      title: 'Time',
      value: '10PM'
    },
  ]

  const locationData = [
    {
      title: 'Location',
      value: 'Club Town, Lahore'
    }
  ]

  const matchSchedule = [
    {
      title: 'Match Schedule',
      route: 'MatchSchedule',
    },
  ]

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Ball Smashers</Text>
                <View style={styles.infoContainer} >
                  <InfoBox infoList={scheduleData} />
                  <View style={styles.box} >
                    <InfoBox infoList={locationData} />
                    <Button mode='text' onPress={() => {}} style={styles.button} >View on map</Button>
                  </View>
                  <View style={styles.box} >
                    <SettingsBox settingList={matchSchedule} />
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
  button: {
    alignSelf: 'flex-end',
  }
});

export default TournamentInfo;