import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAuthStore } from '../(tabs)/store';

const Settings = () => {
  const email = useAuthStore((state) => state.email); 
  const logout = useAuthStore((state) => state.logout);

  const menuItems = [
    { nam: 'password', title: 'Password', icon: 'chevron-forward' },
    { nam: 'touch-id', title: 'Touch ID', icon: 'chevron-forward' },
    { nam: 'language', title: 'Languages', icon: 'chevron-forward' },
    { nam: 'app-info', title: 'App information', icon: 'chevron-forward' },
    { nam: 'customer-care', title: 'Customer care', icon: 'chevron-forward' },
  ];

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: async () => { await logout(); router.replace('../sign-in'); } }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <SafeAreaView>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => router.back()} style={{ padding: 5 }}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.contentCard}>
        <View style={styles.profileSection}>
          <Image 
            source={require('../../../assets/images/boy.jpg')} 
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{email ? email : 'User'}</Text> 
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.nam} 
              onPress={() => router.push(`../(settings)/${item.nam}`)} 
              style={styles.menuItem}
            >
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons name={item.icon} size={20} color="#CCC" />
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={handleLogout} style={[styles.menuItem, styles.logoutItem]}>
            <Text style={styles.logoutText}>Logout</Text>
            <Ionicons name="log-out-outline" size={20} color="#FF4D4D" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0052FF', 
  },
  headerBackground: {
    height: '30%',
    backgroundColor: '#0052FF',
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 10,
  },
  contentCard: {
    flex: 1,
    backgroundColor: 'rgb(71, 71, 129)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50, 
    paddingHorizontal: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -50, 
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  logoutItem: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF4D4D', 
    fontWeight: '600',
  },
});

export default Settings;