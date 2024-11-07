import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TextInput from '../textInput';
import Entypo from '@expo/vector-icons/Entypo';

const CitySelect = () => {
    const [selectedCity, setSelectedCity] = useState('');
  
    return (
      <View>
          <View>
            <View style={styles.pickerWrapper} >
                <TouchableOpacity style={styles.pickerValueShow} >
                    <TextInput placeholder={'Select city'} value={selectedCity} editable={false} />
                    <Entypo style={styles.pickerIcon} name="select-arrows" size={20} color="black" />
                </TouchableOpacity>
               <View style={styles.picker} >
                <RNPickerSelect
                    onValueChange={(value) => setSelectedCity(value)}
                    items={[
                      { label: 'Lahore', value: 'Lahore' },
                      { label: 'Karachi', value: 'Karachi' },
                      { label: 'Islamabad', value: 'Islamabad' },
                    ]}
                    placeholder={{
                      label: 'Select an option...',
                      value: null,
                    }}
                  />
               </View>
            </View>
          </View>
      </View>
    );
  };

  export default CitySelect;

  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    pickerWrapper: {
      position: 'relative',
    },
    pickerValueShow: {
      position: 'relative',
    },
    picker: {
      position: 'absolute',
      top: 0,
      backgroundColor: Colors.black,
      width: '100%',
      padding: 20,
      borderRadius: 16,
      opacity: 0,
    },
    pickerIcon: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: [{ translateY: -12 }],
      color: Colors.white,
    },
  });
  