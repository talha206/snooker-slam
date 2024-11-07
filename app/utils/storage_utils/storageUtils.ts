import AsyncStorage from '@react-native-async-storage/async-storage';

const KeyForStorage = {
  accessToken: 'accessToken',
  userRole: 'userRole'
}

const saveData = async (key: string, value: any) => {
  const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

const removeKey = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

const retriveData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
  } catch (e) {
    // saving error
  }
};

export { saveData, retriveData, removeKey, KeyForStorage }