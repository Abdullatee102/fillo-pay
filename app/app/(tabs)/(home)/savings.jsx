import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const Savings = () => {
  
  const MenuOption = ({ title, subtitle, image, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
      <Image source={image} style={styles.cardImage} resizeMode="contain" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#1A202C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Save online</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <MenuOption 
          title="Add"
          subtitle="Add new save online account"
          image={require('../../../assets/images/save-img.png')} 
          onPress={() => router.push('../add-acct')}
        />

        <MenuOption 
          title="Management"
          subtitle="Manage your save online account"
          image={require('../../../assets/images/save2-img.png')} 
          onPress={() => router.push('../acct-manage')}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(71, 71, 129)', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A202C',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#A0AEC0',
    lineHeight: 18,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
});

export default Savings;