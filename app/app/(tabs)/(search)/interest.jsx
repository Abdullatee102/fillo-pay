import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';

export default function InterestRate() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <MaterialCommunityIcons name="chevron-left" size={32} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle} >Interest Rate</Text>
          </View>

          <View style={styles.container}>
            
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
    optionsContainer:{
        padding: 15,
        backgroundColor: '#f0f0f0',
        marginTop: 20,
    },
});