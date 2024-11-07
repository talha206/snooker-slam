import { Colors } from '@/constants/Colors';
import React, { useRef, useMemo } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Spacing } from '@/constants/Spacing';
import PointsBox from '../../../user-interface/common/points-box';
import Button from '../../../user-interface/button';
import BottomSheet from '@gorhom/bottom-sheet';
import useScreenSize from '@/hooks/useScreenSize';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import BottomSheetHandle from '../../../user-interface/common/bottom-sheet-handle';

const MatchInfoScreen = () => {
  const { isSmall } = useScreenSize();
  const roundInfoSheetRef = useRef<BottomSheet>(null);
  const playerInfoSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['90%'], []);
  
  const rounds = [1, 2, 3];

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Match 01</Text>
                <Text style={styles.subtitle} >Ball Smashers (14th August)</Text>
                <View style={styles.infoContainer} >
                    <View style={styles.roundsList} >
                        {rounds.map((round) => (
                            <TouchableOpacity 
                                key={round} 
                                style={styles.round} 
                                onPress={() => roundInfoSheetRef.current?.expand()} // Open the Bottom Sheet on click
                            >
                                <Text style={styles.roundText} >Round {round}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.playersCard} >
                        <View style={styles.cardView} >
                            <TouchableOpacity onPress={() => playerInfoSheetRef.current?.expand()} style={styles.playerView} >
                                <View style={styles.playerImg} >
                                    <Image source={require('@/assets/images/player-1.png')} style={styles.img} />
                                </View>
                                <Text style={styles.playerName} >John Doe</Text>
                            </TouchableOpacity>
                            <View>
                                <Image source={require('@/assets/images/vs-icon.png')} style={styles.icon} />
                            </View>
                            <TouchableOpacity onPress={() => playerInfoSheetRef.current?.expand()} style={styles.playerView} >
                                <View style={styles.playerImg} >
                                    <Image source={require('@/assets/images/player-2.png')} style={styles.img} />
                                </View>
                                <Text style={styles.playerName} >Roger Cox</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box} >
                            <PointsBox pointTitle_1='Points' pointTitle_2='Points' pointValue_1='01' pointValue_2='02' />
                        </View>
                    </View>
                    <View style={styles.box} >
                        <View style={styles.infoBox}>
                            <View style={[styles.info, styles.borderBottom]}>
                                <Text style={styles.infoTitle}>Date</Text>
                                <Text style={styles.infoValue}>14th August, 2024</Text>
                            </View>
                            <View style={[styles.info, styles.borderBottom]}>
                                <Text style={styles.infoTitle}>Time</Text>
                                <Text style={styles.infoValue}>8:00 PM</Text>
                            </View>
                            <View style={[styles.infoLocation, styles.borderBottom]}>
                                <Text style={styles.infoTitle}>Location</Text>
                                <View>
                                    <Text style={styles.infoValue}>Boulevard - Club Town, Lahore</Text>
                                    <Button mode='text' style={styles.button} >See on map</Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
      </GradientTopBackground>
      
      <BottomSheet 
        ref={roundInfoSheetRef} 
        index={-1} 
        snapPoints={snapPoints} 
        enablePanDownToClose={true} 
        handleComponent={BottomSheetHandle}
        style={styles.sheet}
      >
        <View>
            <Image source={require('@/assets/images/backgrounds/gradient-top-sheet-bg.jpg')} style={styles.sheetBg} />
            <ScrollView>
              <View style={styles.sheetContent}>
                  <Text style={styles.sheetTitle}>Round 01</Text>
                  <View style={styles.box} >
                      <View style={styles.cardView} >
                          <View style={styles.playerView} >
                              <View style={styles.playerImgLarge} >
                                  <Image source={require('@/assets/images/player-1.png')} style={styles.img} />
                              </View>
                              <Text style={styles.playerName} >John Doe</Text>
                          </View>
                          <View>
                              <Image source={require('@/assets/images/vs-icon.png')} style={styles.icon} />
                          </View>
                          <View style={styles.playerView} >
                              <View style={styles.playerImgLarge} >
                                  <Image source={require('@/assets/images/player-2.png')} style={styles.img} />
                              </View>
                              <Text style={styles.playerName} >Roger Cox</Text>
                          </View>
                      </View>
                  </View>
                  <View style={styles.box} >
                      <PointsBox pointTitle_1='Points' pointTitle_2='Points' pointValue_1='60' pointValue_2='40' />
                  </View>
                  <View style={styles.box} >
                      <View style={styles.infoBox}>
                          <View style={[styles.infoSheet, styles.borderBottom]}>
                              <View style={styles.ranking}>
                                  <FontAwesome name="star" size={40} color={Colors.yellow} />
                                  <Text style={styles.rankingNumber} >5</Text>
                              </View>
                              <Text style={styles.infoTitle}>Ranking</Text>
                              <View style={styles.ranking}>
                                  <FontAwesome name="star" size={40} color={Colors.yellow} />
                                  <Text style={styles.rankingNumber} >5</Text>
                              </View>
                          </View>
                          <View style={[styles.infoSheet, styles.borderBottom]} >
                              <Text style={styles.infoValue} >05</Text>
                              <Text style={styles.infoTitle} >SS Rating</Text>
                              <Text style={styles.infoValue} >05</Text>
                          </View>
                          <View style={[styles.infoSheet, styles.borderBottom]} >
                              <Text style={styles.infoValue} >14</Text>
                              <Text style={styles.infoTitle} >Wins</Text>
                              <Text style={styles.infoValue} >10</Text>
                          </View>
                          <View style={[styles.infoSheet, styles.borderBottom]} >
                              <Text style={styles.infoValue} >05</Text>
                              <Text style={styles.infoTitle} >Lost</Text>
                              <Text style={styles.infoValue} >02</Text>
                          </View>
                      </View>
                  </View>
              </View>
            </ScrollView>
        </View>
      </BottomSheet>
      {/* Player Info Sheet */}
      <BottomSheet 
        ref={playerInfoSheetRef} 
        index={-1} 
        enablePanDownToClose={true} 
        handleComponent={BottomSheetHandle} 
        snapPoints={snapPoints}
        style={styles.sheet} 
      >
        <View>
          <Image source={require('@/assets/images/backgrounds/gradient-top-sheet-bg.jpg')} style={styles.sheetBg} />
          <ScrollView>
              <View style={styles.sheetContent}>
                  <View style={styles.box} >
                    <View style={styles.playerView} >
                        <View style={styles.playerImgExtraLarge} >
                            <Image source={require('@/assets/images/player-1.png')} style={styles.img} />
                        </View>
                        <Text style={styles.playerName} >John Doe</Text>
                    </View>
                  </View>
                  <View style={styles.box} >
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
                  </View>
                  <View style={styles.box} >
                      <PointsBox pointTitle_1='Wins' pointValue_1='100' pointTitle_2='Lost' pointValue_2='31' />
                  </View>
                  <View style={styles.box} >
                    <View style={styles.infoBox}>
                        <View style={[styles.info, styles.borderBottom]} >
                            <Text style={styles.infoTitle}>Whatsapp</Text>
                            <Text style={styles.infoValue}>+920000000000</Text>
                        </View>
                        <View style={styles.info} >
                            <Text style={styles.infoTitle}>Email</Text>
                            <Text style={styles.infoValue} >player@snookerslam.com</Text>
                        </View>
                    </View>
                  </View>
              </View>
            </ScrollView>
        </View>
      </BottomSheet>
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
  subtitle: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  infoContainer: {
    marginTop: 20,
    paddingBottom: 100,
  },
  box: {
    marginTop: 20,
  },
  roundsList: {
    flexDirection: 'row',
    gap: 6,
  },
  round: {
    flex: 1,
    backgroundColor: Colors.gray[400],
    borderWidth: 1,
    borderColor: Colors.gray[200],
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
  },
  roundText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  playersCard: {
    backgroundColor: Colors.gray[400],
    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },
  playerImg: {
    backgroundColor: Colors.primary,
    borderRadius: 40,
    overflow: 'hidden',
    width: 80,
    height: 80,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  icon: {
    width: 60,
    height: 60,
  },
  playerView: {
    alignItems: 'center',
    gap: 10,
  },
  playerName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600'
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
  infoSheet: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLocation: {
    flexDirection: 'row',
    paddingVertical: 18,
    justifyContent: 'space-between',
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
  button: {
    alignSelf: 'flex-end',
  },
  sheetBg: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  sheetContent: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 100,
  },
  sheetTitle: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
  },
  sheet: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  playerImgLarge: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    overflow: 'hidden',
    width: 110,
    height: 110,
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
  },
  playerImgExtraLarge: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    overflow: 'hidden',
    width: 150,
    height: 150,
  }
});

export default MatchInfoScreen;