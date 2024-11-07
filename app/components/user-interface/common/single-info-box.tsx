import { Colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface SingleInfoBoxProps {
    title: string;
    value: any;
}

const SingleInfoBox = ({title, value}: SingleInfoBoxProps) => {
  return (
    <View style={styles.infoBox} >
      <View style={styles.infoLeft} >
        <Feather name="info" size={20} color={Colors.white} />
        <Text style={styles.title} >{title}</Text>
      </View>
      <Text style={styles.value} >{value}</Text>
    </View>
  )
}

export default SingleInfoBox

const styles = StyleSheet.create({
    infoBox: {
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 12,
    },
    infoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    value: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    }

})