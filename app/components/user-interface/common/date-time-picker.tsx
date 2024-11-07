import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import TextInput from '../textInput';
import { AntDesign } from '@expo/vector-icons';

interface DateTimePickerProps {
    placeholder?: string;
}

const DateTimePicker = ({placeholder}: DateTimePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = `${date.getMonth() + 1}/${date.getFullYear()}`;
    setSelectedDate(formattedDate);
    hideDatePicker();
  };
  
    return (
        <View>
            <View>
                <View style={styles.pickerWrapper} >
                    <View style={styles.pickerDateShow} >
                        <TextInput placeholder={placeholder} value={selectedDate} editable={false} />
                        <AntDesign style={styles.pickerIcon} name="calendar" size={20} color="black" />
                    </View>
                    <TouchableOpacity style={styles.picker} onPress={showDatePicker} />
                </View>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

export default DateTimePicker;

const styles = StyleSheet.create({
    pickerWrapper: {
        position: 'relative',
    },
    picker: {
        position: 'absolute',
        width: '100%',
        height: 56,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 14,
    },
    pickerDateShow: {
        position: 'relative',
    },
    pickerIcon: {
        position: 'absolute',
        right: 16,
        top: '50%',
        transform: [{ translateY: -12 }],
        color: Colors.white,
    },
    paymentsWrapper: {
        marginTop: 20,
    },
})