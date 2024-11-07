import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { TextInput as ReactNativeTextInput, TextInputProps, View, ViewStyle, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface CustomTextInputProps extends TextInputProps {
    style?: ViewStyle;
    ref?: any,
}

const TextInput: React.FC<CustomTextInputProps> = ({style, ref, ...props}) => {
  return (
    <View style={style} >
      <LinearGradient style={styles.outerGradient} start={[0, 0]} end={[1, 0]} colors={[Colors.white, Colors.gray.medium, Colors.gray.medium]} >
        <LinearGradient style={styles.innerGradient} start={[0, 0]} end={[1, 0]} colors={[Colors.black, Colors.gray.medium]} >
            <ReactNativeTextInput placeholderTextColor={Colors.gray[500]} style={styles.input} ref={ref} {...props} />
        </LinearGradient>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    outerGradient: {
        padding: 2,
        borderRadius: 16,
    },
    innerGradient: {
        borderRadius: 14,
    },
    input: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        backgroundColor: 'transparent',
    }
})

export default TextInput
