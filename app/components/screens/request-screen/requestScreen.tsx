import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import GradientTopBackground from '../../backgrounds/gradientTopBackground';
import { Spacing } from '@/constants/Spacing';
import SingleInfoBox from '../../user-interface/common/single-info-box';
import DateTimePicker from '../../user-interface/common/date-time-picker';
import { Request } from '@/app/types/request';
import ProfileIcon from '@/assets/images/profile.svg';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useScreenSize from '@/hooks/useScreenSize';

interface RequestScreenProps {
  title: string;
  requests: Request[];
  total_registrations: number;
}

const RequestScreen = ({requests, total_registrations, title}: RequestScreenProps) => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >{title}</Text>
                <View style={styles.infoContainer} >
                  <DateTimePicker placeholder='Month & Year' />
                  <View style={styles.paymentsWrapper} >
                    <SingleInfoBox title='Total Registrations' value={total_registrations} />
                    <View style={styles.box} >
                      <Text style={styles.boxTitle} >Listing</Text>
                    </View>
                  </View>
                  <View style={styles.infoCards} >
                    {requests.map((request, index) => (
                      <TouchableOpacity onPress={() => nav.navigate('ClubInfo')} key={index} style={styles.infoCard} >
                        <View style={styles.infoCardLeft} >
                          <ProfileIcon width={40} height={40} />
                          <View>
                            <Text style={styles.cardTitle} >{request.club_name}</Text>
                            <Text style={styles.cardText} >{request.club_owner_name}</Text>
                          </View>
                        </View>
                        <Entypo name='chevron-small-right' size={24} color={Colors.white} />
                      </TouchableOpacity>
                    ))}
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
  pickerWrapper: {
    position: 'relative',
  },
  picker: {
    position: 'absolute',
    width: '100%',
    height: 56,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 14,
  },
  pickerDateShow: {
    position: 'relative',
  },
  pickerIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    color: Colors.white,
  },
  paymentsWrapper: {
    marginTop: 20,
  },
  box: {
    marginTop: 20,
  },
  boxTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 40,
  },
  infoCards: {
    gap: 10,
  },
  infoCard: {
    backgroundColor: Colors.gray[400],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    padding: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  infoCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  cardText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  }
});

export default RequestScreen;