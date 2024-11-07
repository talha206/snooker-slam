import { InformationBox } from '@/app/types/settings';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InfoBoxProps {
    infoList: InformationBox[];
}

const InfoBox = ({ infoList }: InfoBoxProps) => {

  return (
    <View style={styles.infoBox}>
      {infoList.map((info, index) => (
        <View
          key={info.title}
          style={[
            styles.info,
            index < infoList.length - 1 && styles.borderBottom
          ]}
        >
          <Text style={styles.infoTitle}>{info.title}</Text>
          <Text style={styles.infoValue}>{info.value}</Text>
        </View>
      ))}
    </View>
  );
}

export default InfoBox;

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: Colors.gray[400],
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  info: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTitle: {
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: '600',
  },
  infoValue: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
});