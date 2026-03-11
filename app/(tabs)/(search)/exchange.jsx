import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Exchange() {
    return (
        <SafeAreaView style={{ flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <MaterialCommunityIcons name="chevron-left" size={32} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle} >Exchange</Text>
          </View>

          <View style={styles.container}>              
            <View style={styles.exchange}>
              <Image style={styles.exchangeContainer} source={require('../../../assets/images/xchange-img.png')}/>
            </View>

            <View style={{backgroundColor: '#fff', margin: 30, borderRadius: 20, marginBottom: 10}}>
              <Text style={{marginLeft: 40}}> From </Text>
              <TextInput placeholder= "Amount                                |  USD" style={styles.textInput1} />
              <Image style={styles.arrowContainer} source={require('../../../assets/images/arrow.png')}/>
              <Text style={{marginLeft: 40}}> To </Text>
              <TextInput placeholder= "Amount                                |  NGN" style={styles.textInput2} />
              
             <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {Alert.alert('Exchange Button clicked...')}} >
              <Text style={{fontSize: 18, fontWeight: 'bold', color:'white', paddingHorizontal: 50, paddingVertical: 15}}> Exchange </Text> 
             </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#c0bebe',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0', 
  },
  backButton: {
    padding: 11,
    marginLeft: -8, 
    backgroundColor: '#00f'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1, 
    backgroundColor: '#00f',
    padding: 15,
    color: '#fff'
  },
   exchange:{
    alignItems: 'center',
    marginVertical: 20,
   },
   exchangeContainer:{
    width: '50%',
    height: 150,
   },
   textInput1:{
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 40
   },
   textInput2:{
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 40
   },
   arrowContainer:{
    width: 40,
    height: 30,
    alignSelf: 'center',
    marginBottom: 20,
   },
    touchableOpacity:{
     backgroundColor: '#0C00DF',
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     marginBottom: 5
    },
});