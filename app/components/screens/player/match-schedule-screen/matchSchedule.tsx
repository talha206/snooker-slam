import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import GradientTopBackground from "../../../backgrounds/gradientTopBackground";
import TextInput from "../../../user-interface/textInput";
import ScheduleDatePicker from "../../../user-interface/common/schedule-date-picker";
import MatchCard from "../../../user-interface/common/match-card";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";

const MatchSchedule = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();

  const navToMatchScheduleInfo = async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.MatchScheduleInfo);
  };

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            <Text style={styles.title}>Match Schedule</Text>
            <Text style={styles.subtitle}>Ball Smashers (14th August)</Text>
            <View style={styles.infoContainer}>
              <TextInput placeholder="Search by player i.e roger cox" />
              <View style={styles.box}>
                <ScheduleDatePicker />
              </View>
              <View style={styles.box}>
                <Text style={styles.boxTitle}>Match Listing</Text>
                <View style={styles.matchListing}>
                  <MatchCard
                    match_no={1}
                    matchDay="Wed"
                    matchTime="8:00"
                    matchLocation="Lahore"
                    player_1_name="John Doe"
                    player_2_name="Roger Cox"
                    player_1_img={require("@/assets/images/player-1.png")}
                    player_2_img={require("@/assets/images/player-2.png")}
                    onPress={navToMatchScheduleInfo}
                  />
                  <MatchCard
                    match_no={1}
                    matchDay="Wed"
                    matchTime="8:00"
                    matchLocation="Lahore"
                    player_1_name="John Doe"
                    player_2_name="Roger Cox"
                    player_1_img={require("@/assets/images/player-1.png")}
                    player_2_img={require("@/assets/images/player-2.png")}
                    onPress={navToMatchScheduleInfo}
                  />
                  <MatchCard
                    match_no={1}
                    matchDay="Wed"
                    matchTime="8:00"
                    matchLocation="Lahore"
                    player_1_name="John Doe"
                    player_2_name="Roger Cox"
                    player_1_img={require("@/assets/images/player-1.png")}
                    player_2_img={require("@/assets/images/player-2.png")}
                    onPress={navToMatchScheduleInfo}
                  />
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
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 20,
    fontWeight: "600",
  },
  infoContainer: {
    marginTop: 20,
  },
  box: {
    marginTop: 20,
  },
  boxTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  matchListing: {
    gap: 10,
    paddingBottom: 100,
  },
});

export default MatchSchedule;
