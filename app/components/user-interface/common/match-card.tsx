import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MatchCard as MatchCardType } from '@/app/types/tournament'
import { Colors } from '@/constants/Colors'

const MatchCard = ({player_1_name, player_2_name, player_1_img, player_2_img, matchDay, matchTime, match_no, matchLocation ,onPress}: MatchCardType) => {
  
  return (
   <TouchableOpacity onPress={() => onPress()} >
        <View style={styles.card} >
            <Image source={require('@/assets/images/backgrounds/match-card-bg.png')} style={styles.cardBg} />
            <View style={styles.content}>
                <Text style={styles.cardHeadInfo} >Match {match_no} • {matchDay} {matchTime} PM • {matchLocation}</Text>
                <View style={styles.cardView} >
                    <View style={styles.playerView} >
                        <View style={styles.playerImg} >
                            <Image source={player_1_img} style={styles.img} />
                        </View>
                        <Text style={styles.playerName} >{player_1_name}</Text>
                    </View>
                    <View>
                        <Image source={require('@/assets/images/vs-icon.png')} style={styles.icon} />
                    </View>
                    <View style={styles.playerView} >
                        <View style={styles.playerImg} >
                            <Image source={player_2_img} style={styles.img} />
                        </View>
                        <Text style={styles.playerName} >{player_2_name}</Text>
                    </View>
                </View>
            </View>
        </View>
   </TouchableOpacity>
  )
}

export default MatchCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.gray[400],
        position: 'relative',
        borderWidth: 1,
        borderColor: Colors.gray.medium,
        borderRadius: 12,
        overflow: 'hidden',
        flex: 1,
    },
    cardBg: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    content: {
        padding: 20,
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
        width: 45,
        height: 45,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    playerView: {
        alignItems: 'center',
        gap: 10,
    },
    cardHeadInfo: {
        color: Colors.gray.light,
        fontWeight: '600',
        textAlign: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    },
    playerName: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600'
    }
})
