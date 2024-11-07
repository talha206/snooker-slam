import React from 'react';
import useScreenSize from '@/hooks/useScreenSize';
import InfoBox from '../../../user-interface/common/info-box';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import { View, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import { Spacing } from '@/constants/Spacing';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Button from '@/app/components/user-interface/button';

const ClubInfo = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();

  const supportInfo = [
    {
        title: 'Phone Number',
        value: '+920000000000'
    },
    {
        title: 'Email',
        value: 'club@snookerslam.com'
    }
  ]
  const navToNoOfClub = async () => {
    const { BaRouteNames } = await import(
      "@/app/navigations-map/brand-ambassador/index.config"
    );

    nav.navigate(BaRouteNames.NoOfClub);
  
  };

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Ball Cleanser</Text>
                <Text style={styles.infoText} >You can contact club through following below.</Text>
                <View style={styles.infoContainer} >
                    <InfoBox infoList={supportInfo} />
                </View>  
                <View style={[styles.actionContainer, isSmall && styles.smallActionContainer]}>
                  <View>
                <Button mode="contained" onPress={navToNoOfClub}>Complete Information</Button>
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
  actionContainer: {
    marginTop: 50,
    width: '100%',
  },
  smallActionContainer: {
    bottom: 40,
  },
  infoText: {
    marginTop: 14,
    marginBottom: 20,
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: '500',
  }
});

export default ClubInfo;