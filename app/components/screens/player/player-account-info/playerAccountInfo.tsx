import React, { useEffect } from 'react';
import useScreenSize from '@/hooks/useScreenSize';
import InfoBox from '../../../user-interface/common/info-box';
import GradientTopBackground from '../../../backgrounds/gradientTopBackground';
import { useState } from 'react';
import { View , StyleSheet, Text, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native';
import { Spacing } from '@/constants/Spacing';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const PlayerAccountInfo = () => {
  const [image, setImage] = useState(null);
  const { isSmall } = useScreenSize();
  const [showCompleteProfileButton, setShowCompleteProfileButton] = useState(false);
  
  const nav = useNavigation();

  const username = [
    {
        title: 'Username',
        value: 'Ramsha',
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
    }
  ];

  const sharedInfo = [
    {
        title: 'CNIC',
        value: '00000-0000000-0', 
    },
    {
        title: 'DOB',
        value: '00/00/00', 
    },
    {
        title: 'Email Address',
        value: 'Player@snookerslam.com', 
    },
    {
        title: 'City',
        value: 'Lahore', 
    },
  ];
  const navtoPlayerAccountInfo = async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.PlayerAccountInfo);
  };

  const navtoPlayerUsername = async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.playerUsername);
  };

  const isProfileComplete = () => {
    return personInfo.every(info => info.value) && sharedInfo.every(info => info.value);
  };

  const showCompleteAccountAlert = () => {
    Alert.alert(
      "Complete Your Profile",
      "Some required information is missing. Please complete your account details.",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            setShowCompleteProfileButton(true);
            navtoPlayerAccountInfo();
          }
        },
        {
          text: "Proceed",
          onPress: () => navtoPlayerUsername(),
        }
      ]
    );
  };

  useEffect(() => {
    if (!isProfileComplete()) {
      showCompleteAccountAlert();
    }
  }, []);

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]} >
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Text style={styles.title} >Account Info</Text>
                <View style={styles.infoContainer} >
                    {image ? (
                        <View style={styles.profileImg} >
                            <Image style={styles.image} source={{ uri: image }} />
                            <TouchableOpacity style={styles.selectImageButton} onPress={() => setImage(null)}>
                                <Octicons name="pencil" size={16} color={Colors.white} />
                            </TouchableOpacity>
                        </View>
                    ): (
                        <View style={styles.profileImg} >
                            <Ionicons size={150} name="person-circle-sharp" color={Colors.primary} />
                            <TouchableOpacity style={styles.selectImageButton} onPress={()=>{}}>
                                <Octicons name="pencil" size={16} color={Colors.white} />
                            </TouchableOpacity>
                        </View>
                    )}
                    <Text style={styles.uploadText} >Please upload your picture above</Text>
                    <View style={styles.infoWrapper} >
                        <InfoBox infoList={username} />
                        <InfoBox infoList={personInfo} />
                        <InfoBox infoList={sharedInfo} />
                    </View>
                </View>
            </ScrollView>
            {showCompleteProfileButton && (
            <TouchableOpacity style={styles.completeProfileButton} onPress={navtoPlayerUsername}>
              <Text style={styles.completeProfileButtonText}>Complete Profile</Text>
            </TouchableOpacity>
          )}
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
  infoContainer: {
    marginTop: 20,
  },
  profileImg: {
    alignSelf: 'center',
    position: 'relative',
  },
  selectImageButton: {
    position: 'absolute',
    bottom: 0,
    width: 36,
    height: 36,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 500,
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
  completeProfileButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  completeProfileButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});

export default PlayerAccountInfo;