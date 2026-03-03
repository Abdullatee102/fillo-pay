import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Branch() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/status-bar2.png')}/>
            </View>

            <Pressable onPress={()=> { router.back()}} style={styles.textContainer}>
              <Text style={styles.text}> Branch </Text>
            </Pressable>

            <View style={styles.optionsContainer}>
              <Image style={styles.branch} source={require('../../../assets/images/image.jpg')}/>
            </View>

            <View style={styles.textInput}>
                <TextInput style={styles.input} placeholder='Enter branch name or code'/>
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
  imageContainer:{
    alignItems: 'center',
    marginBottom: 20,
  },
  image:{
    width: '100%',
    height: 40,
    alignSelf: 'center',
  },
   branch:{
    width: '90%',
    height: 300,
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
