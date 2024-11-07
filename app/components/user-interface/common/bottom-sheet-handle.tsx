import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const BottomSheetHandle = () => {
  return (          
    <View style={styles.gestureWrapper} >
        <View style={styles.gestureBar} ></View>
    </View>
  )
}

export default BottomSheetHandle

const styles = StyleSheet.create({
    gestureWrapper: {
        backgroundColor: Colors.primaryDark900, 
        paddingTop: 14
    },
    gestureBar: {
        width: 48,
        height: 6,
        borderRadius: 10,
        backgroundColor: Colors.white50,
        alignSelf: 'center',
    },
})
