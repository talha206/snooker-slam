import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Icon } from 'react-native-elements';

const BackButton = ({...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={styles.button}
    >
      <View style={styles.iconContainer}>
        <Icon name='arrow-back' type='material' color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    backgroundColor: Colors.white,
    padding: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BackButton;
