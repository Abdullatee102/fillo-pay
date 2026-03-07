import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import InfoRow from '../../../components/info-row';

const AppInfoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialCommunityIcons name="chevron-left" size={32} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} >App information</Text>
      </View>

      <View style={styles.content}>
        
        <Text style={styles.appTitle} > CaBank E-mobile Banking</Text>

        <View style={styles.infoTable}>
          <InfoRow label="Date of manufacture" value="Mar 2024" />
          <InfoRow label="Version" value="1.0.0" />
          <InfoRow label="Language" value="English" />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  infoTable: {
    marginTop: 10,
  },
});

export default AppInfoScreen;