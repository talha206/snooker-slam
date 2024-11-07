import React, {ReactNode} from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'

interface AppKeyboardAvoidingViewProps {
  contentContainerStyle?: StyleProp<ViewStyle>
  children: ReactNode
}

const AppKeyboardAvoidingView: React.FC<AppKeyboardAvoidingViewProps> = ({
  contentContainerStyle,
  children,
}) => {

  if(Platform.OS === 'ios') {
    return <View style={contentContainerStyle}>{children}</View>
  }
  return (
    <KeyboardAvoidingView
      behavior={'height'}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AppKeyboardAvoidingView
