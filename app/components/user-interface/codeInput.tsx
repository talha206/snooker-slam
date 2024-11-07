import React, { useState, useRef } from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

interface CodeInputProps {
  length: number;
  onChange: (value: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ length, onChange }) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const refs = useRef<(RNTextInput | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    onChange(newCode.join(''));

    if (value && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (value: string, index: number) => {
    if (!value && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <View key={index} style={{flex: 1}} >
            <LinearGradient
            key={index}
            style={styles.outerGradient}
            start={[0, 0]}
            end={[1, 0]}
            colors={[Colors.white, Colors.gray.medium, Colors.gray.medium]}
            >
                <LinearGradient
                    style={styles.innerGradient}
                    start={[0, 0]}
                    end={[1, 0]}
                    colors={[Colors.black, Colors.gray.medium]}
                >
                    <RNTextInput
                      ref={(el) => (refs.current[index] = el)}
                      style={styles.input}
                      keyboardType="number-pad"
                      maxLength={1}
                      value={digit}
                      onChangeText={(text) => handleChange(text, index)}
                      onKeyPress={({ nativeEvent }) => {
                          if (nativeEvent.key === 'Backspace') {
                          handleBackspace(digit, index);
                          }
                      }}
                      placeholderTextColor={Colors.white}
                    />
                </LinearGradient>
            </LinearGradient>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 10,
    },
    outerGradient: {
      height: 60,
      padding: 2,
      borderRadius: 16,
    },
    innerGradient: {
      borderRadius: 14,
      flex: 1,
    },
    input: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18,
      color: Colors.white,
      backgroundColor: 'transparent',
    },
  });

export default CodeInput;
