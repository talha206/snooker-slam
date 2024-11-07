import React, { ReactNode } from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface BlurBallsBackgroundProps {
    children: ReactNode;
}

const blueballbackground = ({children}: BlurBallsBackgroundProps) => {
    return (
        <View style={styles.container}>
          <Image source={require('@/assets/images/backgrounds/image.png')} style={styles.background} />
          {children}
        </View>
    );
}

export default blueballbackground;

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
