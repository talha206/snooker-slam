import React from 'react';
import HomeIcon from '@/assets/images/home.svg';
import PlayersIcon from '@/assets/images/players.svg';
import TournamentsIcon from '@/assets/images/tournaments.svg';
import AccountIcon from '@/assets/images/account.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import PlayerAccount from '../player-account-screen/playerAccount';
import PlayerRanking from '../player-ranking-screen/playerRanking';
import Tournaments from '../tournaments-screen/tournaments';
import Home from '../home-screen/homePlayer';

const Tab = createBottomTabNavigator();

export function PlayerTabNavigator() {
  const bottomTabs = [
    { tab: 'Home', icon: HomeIcon, route: 'Home' },
    { tab: 'Players', icon: PlayersIcon, route: 'Players' },
    { tab: 'Tournaments', icon: TournamentsIcon, route: 'Tournaments' },
    { tab: 'Account', icon: AccountIcon, route: 'Account' },
  ];
  return (
    <SafeAreaView style={styles.safeArea} >
      <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              const currentTab = bottomTabs.find((tab) => tab.route === route.name);
              const IconComponent = currentTab?.icon;

              return (
                <View style={focused ? styles.activeTab : styles.tab}>
                  {IconComponent && (
                    <IconComponent
                      width={24}
                      height={24}
                    />
                  )}
                </View>
              );
            },
            tabBarLabel: () => null,
            tabBarStyle: {
              backgroundColor: Colors.gray[400], 
              paddingTop: Spacing.medium,
              paddingBottom: Spacing.medium,
              elevation: 5,
              borderTopWidth: 0,
              marginHorizontal: 10,
              borderRadius: 20,
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Players" component={PlayerRanking} />
          <Tab.Screen name="Tournaments" component={Tournaments} />
          <Tab.Screen name="Account" component={PlayerAccount} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: Colors.black,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: Spacing.large,
    borderRadius: 15,
  },
  tabText: {
    color: Colors.white,
    fontSize: 14,
    marginLeft: 10,
  },
  activeTab: {
    backgroundColor: Colors.primary,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
  },
});