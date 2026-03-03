import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Settings = () => {
  // Menu items based on the design images
  const menuItems = [
    { id: '1', title: 'Password', icon: 'chevron-forward' },
    { id: '2', title: 'Touch ID', icon: 'chevron-forward' },
    { id: '3', title: 'Languages', icon: 'chevron-forward' },
    { id: '4', title: 'App information', icon: 'chevron-forward' },
    { id: '5', title: 'Customer care', icon: 'chevron-forward' },
  ];

  return (
    <View style={styles.container}>
      {/* Blue Header Section */}
      <View style={styles.headerBackground}>
        <SafeAreaView>
          <View style={styles.headerTop}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Setting</Text>
            <View style={{ width: 24 }} /> {/* Spacer for centering */}
          </View>
        </SafeAreaView>
      </View>

      {/* Profile and Menu Card */}
      <View style={styles.contentCard}>
        <View style={styles.profileSection}>
          <Image 
            source={require('../../../assets/images/boy.jpg')} // Replace with actual profile image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}> Abdullateef </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons name={item.icon} size={20} color="#CCC" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0052FF', // Base blue color
  },
  headerBackground: {
    height: '30%',
    backgroundColor: '#0052FF',
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  contentCard: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50, // Pulls the card up into the blue section
    paddingTop: 0,
    paddingHorizontal: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -50, // Centers the profile image on the card edge
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
    color: '#0052FF',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    fontSize: 16,
    color: '#666',
  },
});

export default Settings;