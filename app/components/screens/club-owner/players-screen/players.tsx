import React from 'react';
import TextInput from '../../../user-interface/textInput';
import SingleInfoBox from '../../../user-interface/common/single-info-box';
import SettingsBox from '../../../user-interface/common/settings-box';
import useScreenSize from '@/hooks/useScreenSize';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';

const Players = () => {
  const { isSmall } = useScreenSize();

  const playerList = [
    {
        title: 'John Doe',
        route: 'PlayerInfo'
    },
    {
        title: 'Roger Cox',
        route: 'PlayerInfo'
    },
  ]

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Players</Text>
                <View style={styles.infoContainer} >
                    <TextInput placeholder='Search player by name i.e john' />
                    <View style={styles.box} >
                        <SingleInfoBox title='Registered Players' value='02' />
                    </View>
                    <View style={styles.box} >
                        <Text style={styles.sectionTitle} >Player Listing</Text>
                        <View style={styles.playerList} >
                          <SettingsBox settingList={playerList} />
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
  sectionTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  playerList: {
    paddingBottom: 100,
  }
});

export default Players;