import React from 'react';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import PointsBox from '../../../user-interface/common/points-box';
import useScreenSize from '@/hooks/useScreenSize';
import { Colors } from '@/constants/Colors';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';
import { FontAwesome } from '@expo/vector-icons';

const PlayerInfo = () => {
  const { isSmall } = useScreenSize();

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Player Info</Text>
                <View style={styles.infoContainer} >
                    <View style={styles.infoBox}>
                        <View style={[styles.info, styles.borderBottom]} >
                            <Text style={styles.infoTitle}>Player Name</Text>
                            <Text style={styles.infoValue}>John Doe</Text>
                        </View>
                        <View style={styles.info} >
                            <Text style={styles.infoTitle}>Ranking</Text>
                            <View style={styles.ranking}>
                                <FontAwesome name="star" size={40} color={Colors.yellow} />
                                <Text style={styles.rankingNumber} >5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.box} >
                        <PointsBox pointTitle_1='Wins' pointValue_1='100' pointTitle_2='Lost' pointValue_2='31' />
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
  infoBox: {
    backgroundColor: Colors.gray[400],
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  info: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTitle: {
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: '600',
  },
  infoValue: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  ranking: {
    position: 'relative',
  },
  rankingNumber: {
    position: 'absolute',
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: '800',
    top: 10,
    fontSize: 16,

    verticalAlign: 'middle',
  }
});

export default PlayerInfo;