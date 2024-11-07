import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ScheduleDatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

  return (
    <View style={styles.dateFilter} >
        <View style={styles.dateShowPicker} >
            <Feather name="chevrons-left" size={24} color={Colors.white} />
            <View style={styles.dateShowPickerInner} >
                <View style={styles.datePickerDate} >
                    <Text style={styles.dateDay} >Tue</Text>
                    <Text style={styles.dateNumber} >31 Jul</Text>
                </View>
               <View style={styles.activeDate} >
                    <LinearGradient style={styles.datePickerDate} start={[0, 0]} end={[0, 1]} colors={[Colors.gray[400], Colors.primaryDark]} >
                        <Text style={styles.dateDay} >Today</Text>
                        <Text style={styles.dateNumber} >1 Aug</Text>
                    </LinearGradient>
               </View>
                <View style={styles.datePickerDate} >
                    <Text style={styles.dateDay} >Fri</Text>
                    <Text style={styles.dateNumber} >2 Aug</Text>
                </View>
            </View>
            <Feather name="chevrons-right" size={24} color={Colors.white} />
        </View>
        <TouchableOpacity onPress={() => showDatePicker()} style={styles.datePickerCalendar} >
            <AntDesign name="calendar" size={24} color={Colors.white} />
        </TouchableOpacity>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onCancel={hideDatePicker}
            onConfirm={() => {}}
        />
    </View>
  )
}

export default ScheduleDatePicker

const styles = StyleSheet.create({
    dateFilter: {
      flexDirection: 'row',
      gap: 10,
    },
    dateShowPicker: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.gray[400],
        borderWidth: 1,
        borderColor: Colors.gray[200],
        borderRadius: 16,
        paddingHorizontal: 10,
        flex: 1,
    },
    dateShowPickerInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateDay: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
    },
    datePickerDate: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    dateNumber: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: '600',
        marginTop: 4,
    },
    datePickerCalendar: {
        backgroundColor: Colors.gray[400],
        borderWidth: 1,
        borderColor: Colors.gray[200],
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDate: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    }
})