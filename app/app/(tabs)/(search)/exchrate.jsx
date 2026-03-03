import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function ExchangeRate() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/status-bar2.png')}/>
            </View>
            
            <Pressable onPress={()=> { router.back()}} style={styles.textContainer}>
              <Text style={styles.text}> Exchange rate </Text>
            </Pressable>

            <View style={styles.optionsContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}> Country </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}> Buy Rate </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}> Sell Rate </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/french.png')}/><Text style={{fontSize: 16}}> France </Text></View>
                    <Text style={{fontSize: 16}}> 1.009 </Text>
                    <Text style={{fontSize: 16}}> 1.922 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/korea.png')}/><Text style={{fontSize: 16}}> Korea </Text></View>
                    <Text style={{fontSize: 16}}> 0.295 </Text>
                    <Text style={{fontSize: 16}}> 0.917 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/russia.png')}/><Text style={{fontSize: 16}}> Russia </Text></View>
                    <Text style={{fontSize: 16}}> 20.92 </Text>
                    <Text style={{fontSize: 16}}> 23.85 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/japan.png')}/><Text style={{fontSize: 16}}> Japan </Text></View>
                    <Text style={{fontSize: 16}}> 3.110 </Text>
                    <Text style={{fontSize: 16}}> 6.072 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/china.png')}/><Text style={{fontSize: 16}}> China </Text></View>
                    <Text style={{fontSize: 16}}> 150.2 </Text>
                    <Text style={{fontSize: 16}}> 254.6 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/russia.png')}/><Text style={{fontSize: 16}}> Russia </Text></View>
                    <Text style={{fontSize: 16}}> 1.234 </Text>
                    <Text style={{fontSize: 16}}> 1.567 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/korea.png')}/><Text style={{fontSize: 16}}> Korea </Text></View>
                    <Text style={{fontSize: 16}}> 0.892 </Text>
                    <Text style={{fontSize: 16}}> 1.234 </Text>
                </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/japan.png')}/><Text style={{fontSize: 16}}> Japan </Text></View>
                    <Text style={{fontSize: 16}}> 0.543 </Text>
                    <Text style={{fontSize: 16}}> 0.876 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/china.png')}/><Text style={{fontSize: 16}}> China </Text></View>
                    <Text style={{fontSize: 16}}> 200.3 </Text>
                    <Text style={{fontSize: 16}}> 431.5 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/french.png')}/><Text style={{fontSize: 16}}> French </Text></View>
                    <Text style={{fontSize: 16}}> 0.023 </Text>
                    <Text style={{fontSize: 16}}> 0.045 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/russia.png')}/><Text style={{fontSize: 16}}> Russia </Text></View>
                    <Text style={{fontSize: 16}}> 20.92 </Text>
                    <Text style={{fontSize: 16}}> 23.85 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/french.png')}/><Text style={{fontSize: 16}}> France </Text></View>
                    <Text style={{fontSize: 16}}> 1.009 </Text>
                    <Text style={{fontSize: 16}}> 1.922 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/korea.png')}/><Text style={{fontSize: 16}}> Korea </Text></View>
                    <Text style={{fontSize: 16}}> 0.295 </Text>
                    <Text style={{fontSize: 16}}> 0.917 </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}><Image style={styles.countryImage} source={require('../../../assets/images/japan.png')}/><Text style={{fontSize: 16}}> Japan </Text></View>
                    <Text style={{fontSize: 16}}> 3.110 </Text>
                    <Text style={{fontSize: 16}}> 6.072 </Text>
                </View>
            </View>

          </View>
        </ScrollView>
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
      padding:15,
      backgroundColor:'#f0f0f0',
      borderRadius:10,
    },
    countryImage:{
      width:30,
      height:30,
      marginRight:10,
    },
    branch:{
      width: '90%',
      height: 300,
      alignSelf: 'center',
      marginVertical: 20,
    },
});