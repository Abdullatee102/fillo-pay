import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function InterestRate() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View style={styles.container}>
            <View>
                <Image source={require('../../../assets/images/status-bar2.png')} style={styles.image}/>
            </View>

            <Pressable onPress={()=> { router.back()}} style={styles.textContainer}>
              <Text style={styles.text}> Interest Rate </Text>
            </Pressable>
            
            <View style={styles.optionsContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}> Interest Kind </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}> Deposit </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}> Kind </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 1 month </Text>
                    <Text style={{fontSize: 16}}> 5.0% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 3 months </Text>
                    <Text style={{fontSize: 16}}> 7.0% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 5 months </Text>
                    <Text style={{fontSize: 16}}> 2.8% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 8 months </Text>
                    <Text style={{fontSize: 16}}> 7.5% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 2 months </Text>
                    <Text style={{fontSize: 16}}> 9.5% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 7 months </Text>
                    <Text style={{fontSize: 16}}> 5.1% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 1 month </Text>
                    <Text style={{fontSize: 16}}> 5.2% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 9 months </Text>
                    <Text style={{fontSize: 16}}> 9.4% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 1 month </Text>
                    <Text style={{fontSize: 16}}> 9.5% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 2 months </Text>
                    <Text style={{fontSize: 16}}> 8.3% </Text>
                </View><View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 9 months </Text>
                    <Text style={{fontSize: 16}}> 2.8% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 6 months </Text>
                    <Text style={{fontSize: 16}}> 3.1% </Text>
                </View><View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 7 months </Text>
                    <Text style={{fontSize: 16}}> 5.2% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 3 months </Text>
                    <Text style={{fontSize: 16}}> 7.6% </Text>
                </View><View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 9 months </Text>
                    <Text style={{fontSize: 16}}> 4.5% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 2 months </Text>
                    <Text style={{fontSize: 16}}> 8.7% </Text>
                </View><View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 1 month </Text>
                    <Text style={{fontSize: 16}}> 5.5% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 4 months </Text>
                    <Text style={{fontSize: 16}}> 3.7% </Text>
                </View><View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Individual Customers </Text>
                    <Text style={{fontSize: 16}}> 2 months </Text>
                    <Text style={{fontSize: 16}}> 5.7% </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}> Corporate Customers </Text>
                    <Text style={{fontSize: 16}}> 5 months </Text>
                    <Text style={{fontSize: 16}}> 7.6% </Text>
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
        color: 'white',
    },
    optionsContainer:{
        padding: 15,
        backgroundColor: '#f0f0f0',
        marginTop: 20,
    },
});