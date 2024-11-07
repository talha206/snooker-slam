import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StepperProps {
    noOfSteps: number;
    activeStep?: number;
}

const Stepper: React.FC<StepperProps> = ({ noOfSteps, activeStep }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: noOfSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index === activeStep ? styles.activeStep : styles.inactiveStep,
            { width: index === activeStep ? 24 : 12 }
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  step: {
    backgroundColor: Colors.primary,
    height: 12,
    borderRadius: 6,
  },
  activeStep: {
    backgroundColor: Colors.primary,
  },
  inactiveStep: {
    backgroundColor: Colors.primary,
  },
});

export default Stepper;
