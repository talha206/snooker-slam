import React, { useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import GradientTopBackground from "../../../backgrounds/gradientTopBackground";
import TournamentCard from "../../../user-interface/common/tournamentCard";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Tournaments = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();
  const [tournamentType, setTournamentType] = useState<string | null>(
    "Upcoming"
  );
  const tournamentTypes = ["Upcoming", "Completed"];

  const navToTournamentInfo = async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.TournamentInfo);
  };

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            <Text style={styles.title}>Tournaments</Text>
            <View style={styles.infoContainer}>
              <View style={styles.selectTournamentType}>
                {tournamentTypes.map((tournament) => (
                  <TouchableOpacity
                    style={[
                      styles.tournamentType,
                      tournamentType === tournament &&
                        styles.selectedTournamentType,
                    ]}
                    key={tournament}
                    onPress={() => setTournamentType(tournament)}
                  >
                    <Text style={styles.tournamentTypeText}>{tournament}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.box}>
                <Text style={styles.boxTitle}>Tournament Listing</Text>
                <View style={styles.tournamentListing}>
                  <TournamentCard
                    clubName="Ball Smashers"
                    date="07/12/2024"
                    time="10PM"
                    onPress={navToTournamentInfo}
                  />
                  <TournamentCard
                    clubName="Ball Smashers"
                    date="07/12/2024"
                    time="10PM"
                    onPress={navToTournamentInfo}
                  />
                  <TournamentCard
                    clubName="Ball Smashers"
                    date="07/12/2024"
                    time="10PM"
                    onPress={navToTournamentInfo}
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
  selectTournamentType: {
    padding: 6,
    borderWidth: 1,
    backgroundColor: Colors.gray[400],
    borderColor: Colors.gray[200],
    borderRadius: 12,
    flexDirection: "row",
  },
  tournamentType: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
  },
  tournamentTypeText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  selectedTournamentType: {
    backgroundColor: Colors.primary,
  },
  tournamentListing: {
    gap: 10,
    paddingBottom: 100,
  },
});

export default Tournaments;
