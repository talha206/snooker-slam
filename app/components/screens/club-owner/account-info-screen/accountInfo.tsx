import React from 'react';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import useScreenSize from '@/hooks/useScreenSize';
import { Colors } from '@/constants/Colors';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';
import { Ionicons, Octicons } from '@expo/vector-icons';
import InfoBox from '../../../user-interface/common/info-box';

const AccountInfo = () => {
  const { isSmall } = useScreenSize();

  const club = [
    {
      title: 'Club Name',
      value: 'Smashers',
    },
  ];
  const personInfo = [
    {
      title: 'Name',
      value: 'John Doe',
    },
    {
      title: 'Mobile Number',
      value: '+920000000000',
    },
  ];
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
  ];

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.title}>Account Info</Text>
            <View style={styles.infoContainer}>
              <View style={styles.profileImg}>
                <Ionicons size={150} name="person-circle-sharp" color={Colors.primary} />
              </View>
              <Text style={styles.uploadText}>Please Upload your picture above</Text>
              <View style={styles.infoWrapper}>
                <InfoBox infoList={club} />
                <InfoBox infoList={personInfo} />
                <InfoBox infoList={sharedInfo} />
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
  profileImg: {
    alignSelf: 'center',
    position: 'relative',
  },
  uploadText: {
    marginTop: 16,
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  infoWrapper: {
    marginTop: 36,
    gap: 20,
    marginBottom: 100,
  },
});

export default AccountInfo;
