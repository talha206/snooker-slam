import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';
import SSLogoMark from '@/assets/images/ss-logo-mark.svg';
import NotificationLogo from '@/assets/images/notification-logo.svg';
import PendingIcon from '@/assets/images/pending-icon.svg';
import ApprovedIcon from '@/assets/images/approved-icon.svg';
import RejectedIcon from '@/assets/images/rejected-icon.svg';
import useScreenSize from '@/hooks/useScreenSize';
import { useNavigation } from '@react-navigation/native';
import SettingsBox from '@/app/components/user-interface/common/settings-box';
import GradientTopBackground from '@/app/components/backgrounds/gradientTopBackground';

const HomeOverview = () => {
  const { width, height, isSmall } = useScreenSize();
  const nav = useNavigation();

  const requestData = [
    {
      title: 'Pending',
      number: 59,
      icon: <PendingIcon width={28} height={28} />
    },
    {
      title: 'Approved',
      number: 10,
      icon: <ApprovedIcon width={28} height={28} />
    },
    {
      title: 'Rejected',
      number: 7,
      icon: <RejectedIcon width={28} height={28} />
    },
  ];

  const requestList = [
    {
      title: 'Pending',
      route: 'Pending'
    },
    {
      title: 'Approved',
      route: 'Approved'
    },
    {
      title: 'Rejected',
      route: 'Rejected'
    },
  ];

  const navToList = async (routeKey: string) => {
    const { BaRouteNames } = await import('@/app/navigations-map/brand-ambassador/index.config');

    const routeMapping: Record<string, string> = {
      Rejected: BaRouteNames.Rejected,
      Pending: BaRouteNames.Pending,
      Approved: BaRouteNames.Approved
    };

    const routeName = routeMapping[routeKey];
    routeName && nav.navigate(routeName); 
  };

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.header}>
              <SSLogoMark />
              <Text style={styles.title}>Overview</Text>
              <TouchableOpacity>
                <NotificationLogo />
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Status</Text>
              <View style={styles.infoCards}>
                {requestData.map((request) => (
                  <TouchableOpacity key={request.title} style={styles.infoCard}>
                    <View>{request.icon}</View>
                    <Text style={styles.infoTitle}>{request.title}</Text>
                    <Text
                      style={[
                        styles.infoNumber,
                        request.title === 'Pending'
                          ? styles.textPending
                          : request.title === 'Approved'
                          ? styles.textApproved
                          : styles.textPrimary,
                      ]}
                    >
                      {request.number < 10 ? '0' : ''}
                      {request.number}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.box}>
                <Text style={styles.infoText}>Registrations</Text>
                <View style={styles.box}>
                  {requestList.map((item) => (
                    <TouchableOpacity
                      key={item.title}
                      onPress={() => navToList(item.route)}
                    >
                      <SettingsBox settingList={[item]} />
                    </TouchableOpacity>
                  ))}
                </View>
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
  smallContainer: {
    paddingHorizontal: 16,
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    color: Colors.gray.light,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  infoCards: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  infoCard: {
    backgroundColor: Colors.gray[400],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
  },
  infoTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  infoNumber: {
    fontSize: 40,
    fontWeight: '700',
    marginTop: 10,
  },
  textPending: {
    color: Colors.yellow,
  },
  textApproved: {
    color: Colors.success.medium,
  },
  textPrimary: {
    color: Colors.primary,
  },
  box: {
    marginTop: 20,
  },
});

export default HomeOverview;
