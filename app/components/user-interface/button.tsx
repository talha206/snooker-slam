import React from 'react';
import { Button as PaperButton, ButtonProps as PaperButtonProps } from 'react-native-paper';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

interface ButtonProps extends PaperButtonProps {
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({ children, style, labelStyle, mode = 'contained', ...props }) => {
  const buttonStyle = mode === 'text' ? [styles.textButton, style] : [styles.containedButton, style];
  
  return (
    <PaperButton
      mode={mode}
      style={buttonStyle}
      labelStyle={[
        styles.label, 
        { color: 'white' }, 
        mode === 'text' && styles.underline,
        labelStyle
      ]}
      {...props}
    >
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  containedButton: {
    borderRadius: 16,
    backgroundColor: Colors.primary,
  },
  textButton: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  label: {
    fontSize: 16,
    paddingVertical: 8,
    fontWeight: '700',
  },
});

export default Button;
