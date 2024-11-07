import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TournamentCard as TournamentCardType } from "@/app/types/tournament";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const TournamentCard = ({
  clubName,
  date,
  time,
  onPress,
}: TournamentCardType) => {

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <LinearGradient
        style={styles.card}
        start={[0, 0]}
        end={[0, 1]}
        colors={[Colors.primary, Colors.gray[400]]}
      >
        <View style={styles.cardInner}>
          <View>
            <Text style={styles.clubName}>{clubName}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TournamentCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 4,
  },
  cardInner: {
    backgroundColor: Colors.gray[400],
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    alignItems: "flex-start",
  },
  clubName: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.white,
  },
  date: {
    marginTop: 12,
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: "600",
  },
  timeBox: {
    backgroundColor: Colors.gray[300],
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  time: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
