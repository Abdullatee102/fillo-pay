import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Withdraw() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15, backgroundColor: '#fff', color:'rgb(101, 101, 238)',}}>Welcome to the Withdraw Screen</Text>
            <Text style={{ fontSize: 16, padding: 15, color: '#000' }}> Technical setup loading.... Withdraw Screen will appear here soon.</Text>
          </View>
        </SafeAreaView>
      );
};
