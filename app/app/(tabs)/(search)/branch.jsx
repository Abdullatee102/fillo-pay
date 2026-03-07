import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Branch() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <MaterialCommunityIcons name="chevron-left" size={32} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle} >Branch</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.optionsContainer}>
              <Image style={styles.branch} source={require('../../../assets/images/image.jpg')}/>
            </View>

            <View style={styles.textInput}>
                <TextInput placeholder='Enter branch name or code' style={styles.input} />
            </View>

             <Pressable onPress={() => alert('Search pressed')} style={styles.searchButton}>
              <Text style={styles.searchButtonText}> Search </Text>
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
   branch:{
    width: '90%',
    height: 250,
    alignSelf: 'center',
    marginVertical: 20,
  },
   textContainer:{
     padding: 15,
     backgroundColor: 'blue',
   },
   text:{
     fontSize: 20,
     fontWeight: 'bold',
     color:'#fff',
    },
    optionsContainer:{
      margin: 10,
      alignItems: 'center',
    },
    textInput:{
      margin: 10,
      alignItems: 'center',
    },
    input:{
      width: '80%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 18,
      paddingHorizontal: 16,
      color: '#000'
    },
    searchButton:{
      width: '80%',
      height: 50,
      backgroundColor: '#0C00DF',
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
    },
    searchButtonText:{
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
});
