import { View, Image, StyleSheet, Pressable} from "react-native";
import FSafeView  from "../../components/safeView";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button";
import { router } from "expo-router";
import React, { useState } from 'react';


export default function Index() {
  
  return(

    <FSafeView style={{flex:1, backgroundColor:'blue'}}>

      <View>
        <Image style={styles.image} source={require('../../assets/images/status-bar.png')}/>
      </View>

      <View>
        <Image style={styles.image1} source={require('../../assets/images/app-logo.png')}/>
      </View>

      <Pressable style={styles.btnContainer}>
        
        <Button textColor={'blue'} onPress={()=> {router.push('./onboarding')}} text={'Welcome on-board!'}/>
      
      </Pressable>
     
    </FSafeView>
  );
};


const styles = StyleSheet.create({
  image:{
    width:'100%',
    height: 40,
  },
  image1:{
    width: 200,
    height: 200,
    alignSelf:'center',
    marginVertical: 190,    
    resizeMode: 'contain',
  },
  btnContainer:{
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },

});
