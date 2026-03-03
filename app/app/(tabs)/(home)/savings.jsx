import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Savings() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15, backgroundColor: '#fff', color:'rgb(101, 101, 238)',}}>Welcome to the Savings Screen</Text>
            <Text style={{ fontSize: 16, padding: 15, color: '#000' }}> Technical setup loading.... Savings Screen will appear here soon.</Text>
          </View>
        </SafeAreaView>
      );
};
