import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Blueballbackground from '@/app/components/backgrounds/blueballbackground';
import Header from '@/app/components/screens/club-owner/home-screen/header'; // Adjust if the Header is elsewhere in the folder
import Blueballbackground from '@/app/components/backgrounds/blueballbackground';



const App = () => {
  return (
    <Blueballbackground>
      <View style={styles.container}>
        <Header />
         
        {/* Add other components here */}
      </View>
    </Blueballbackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;