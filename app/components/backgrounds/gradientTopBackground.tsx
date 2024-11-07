import React, { ReactNode } from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface BlurBallsBackgroundProps {
    children: ReactNode;
}

const GradientTopBackground = ({children}: BlurBallsBackgroundProps) => {
    return (
        <View style={styles.container}>
          <Image source={require('@/assets/images/backgrounds/gradient-top-bg.jpg')} style={styles.background} />
          {children}
        </View>
    );
}

export default GradientTopBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  }
});
