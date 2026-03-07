import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Image, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Transfer() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(71, 71, 129)' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 20 }}>Transfer</Text>
            <Text style={{ fontSize: 16, color: 'gray', marginHorizontal: 20 }}>No transfer methods added yet.</Text>
            <Image source={require('../../../assets/images/add-img.png')} style={{ width: 350, height: 300, alignSelf: 'center', marginTop: 25, borderRadius: 50 }} />
            <Pressable 
              style={{ backgroundColor: 'blue', padding: 15, borderRadius: 10, alignSelf: 'center', marginTop: 30 }}
              onPress={() => Alert.alert('Add Transfer Method', 'This feature is coming soon!')}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Add Transfer Method</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      );
};

