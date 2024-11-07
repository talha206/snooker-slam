import { SettingItem } from '@/app/types/settings';
import { Colors } from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SettingsBoxProps {
    settingList: SettingItem[];
}

const SettingsBox = ({ settingList }: SettingsBoxProps) => {
  const nav = useNavigation();

  const handleSettingNavigate = (setting: any) => {
    if (setting.route) {
      nav.navigate(setting.route);
    }
  };
  
  return (
    <View style={styles.settingBox}>
      {settingList.map((setting, index) => (
        <TouchableOpacity
          onPress={() => handleSettingNavigate(setting)}
          key={setting.title}
          style={[
            styles.setting,
            index < settingList.length - 1 && styles.borderBottom
          ]}
        >
          <Text style={styles.settingText}>{setting.title}</Text>
          <Entypo name='chevron-small-right' size={20} color={Colors.white} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default SettingsBox;

const styles = StyleSheet.create({
  settingBox: {
    backgroundColor: Colors.gray[400],
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  setting: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
});
