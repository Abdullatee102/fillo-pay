import React from 'react';
import { View, Image, StyleSheet, Pressable, } from "react-native";
import { router } from "expo-router";
import FSafeView from "../../components/safeView";
import Button from "../../components/button";

export default function Index() {

  return (
    <FSafeView style={{flex: 1, backgroundColor: 'blue'}}>
      <View>
        <Image style={styles.image1} source={require('../../assets/images/app-logo.png')}/>
      </View>

      <Pressable style={styles.btnContainer}>
        <Button 
          textColor={'blue'} 
          onPress={() => router.push('./onboarding')} 
          text={'Welcome on-board!'}
        />
      </Pressable>
    </FSafeView>
  );
}

const styles = StyleSheet.create({
  image1: { width: 200, height: 200, alignSelf: 'center', marginVertical: 200, resizeMode: 'contain' },
  btnContainer: { alignSelf: 'center', position: 'absolute', bottom: 50 },
});