import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const Search = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={styles.container}>
            
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../../../assets/images/status-bar2.png')}/>
            </View>

            <Pressable onPress={()=> { router.back()}} style={styles.textContainer}>
              <Text style={styles.text}> {'<'}   Search </Text>
            </Pressable>

            <Pressable onPress={() => {router.push('../../branch')}} style={styles.optionsContainer}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Branch </Text>
              <Text style={styles.optionsText}> Search for branch </Text>

              <View style={styles.branchImage}>
                <Image style={styles.branch} source={require('../../../assets/images/branch-img.png')}/>
              </View>

            </Pressable>


            <Pressable onPress={() => {router.push('../../interest')}} style={styles.optionsContainer}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Interest Rate </Text>
              <Text style={styles.optionsText}> Search for interest rate </Text>

              <View style={styles.branchImage}>
                <Image style={styles.branch} source={require('../../../assets/images/interest-img.png')}/>
              </View>

            </Pressable>

            <Pressable onPress={() => {router.push('../../exchrate')}} style={styles.optionsContainer}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Exchange Rate </Text>
              <Text style={styles.optionsText}> Search for exchange rate </Text>

              <View style={styles.branchImage}>
                <Image style={styles.branch} source={require('../../../assets/images/exchrate-img.png')}/>
              </View>

            </Pressable>

            <Pressable onPress={() => {router.push('../../exchange')}} style={styles.optionsContainer}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}> Exchange </Text>
              <Text style={styles.optionsText}> Exchange amount of money </Text>

              <View style={styles.branchImage}>
                <Image style={styles.branch} source={require('../../../assets/images/exchange-img.png')}/>
              </View>

            </Pressable>
            
          </View>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer:{
    width:'100%',
    height: 40,
  },
  image:{
    width:'100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContainer:{
    padding: 15,
    backgroundColor: 'blue',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  },
  optionsContainer:{
    margin:10,
    padding:15,
    backgroundColor:'#f0f0f0',
    borderRadius:10,
  },
  optionsText:{
    fontSize:16,
    color:'#000',
  },
  branchImage:{
    position:'absolute',
    right:15,
    top:15,
  },
  branch:{
    width:30,
    height:30,
  },
});

export default Search;