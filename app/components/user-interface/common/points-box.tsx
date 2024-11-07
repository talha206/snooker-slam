import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface PointsBoxProps {
    pointTitle_1: string;
    pointTitle_2: string;
    pointValue_1: string;
    pointValue_2: string;
}

const PointsBox = ({pointTitle_1, pointTitle_2, pointValue_1, pointValue_2}: PointsBoxProps) => {
  return (
    <View style={styles.pointsBox} >
        <View style={styles.box} >
            <Text style={styles.pointValue} >{pointValue_1}</Text>
            <Text style={styles.pointTitle} >{pointTitle_1}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.box} >
            <Text style={styles.pointValue} >{pointValue_2}</Text>
            <Text style={styles.pointTitle} >{pointTitle_2}</Text>
        </View>
    </View>
  )
}

export default PointsBox

const styles = StyleSheet.create({
    pointsBox: {
        backgroundColor: Colors.primary,
        paddingVertical: 20,
        borderRadius: 12,
        flexDirection: 'row',
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointValue: {
        color: Colors.white,
        fontSize: 36,
        fontWeight: '700',
    },
    pointTitle: {
        marginTop: 10,
        color: Colors.white,
        fontSize: 20,
        fontWeight: '600',
    },
    separator: {
        width: 2,
        height: '100%',
        backgroundColor: Colors.primaryDark,
        marginHorizontal: Spacing.small,
    }
})


