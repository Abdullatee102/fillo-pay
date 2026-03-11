import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function AccountCardScreen() {
  const [activeTab, setActiveTab] = useState('Account'); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> {router.back()}}>
          <Ionicons name="arrow-back" color="#000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account and card</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Account' && styles.activeTab]}
          onPress={() => setActiveTab('Account')}
        >
          <Text style={[styles.tabText, activeTab === 'Account' && styles.activeTabText]}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Card' && styles.activeTab]}
          onPress={() => setActiveTab('Card')}
        >
          <Text style={[styles.tabText, activeTab === 'Card' && styles.activeTabText]}>Card</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'Account' ? (
          <AccountView />
        ) : (
          <CardView />
        )}
      </ScrollView>

      {activeTab === 'Card' && (
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add card</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const AccountView = () => (
  <View style={styles.centerContent}>
    <Image 
      source={require('../../../assets/images/boy.jpg')}
      style={styles.profileImage} 
    />
    <Text style={styles.profileName}>Abdullateef</Text>
    
    <View style={styles.listContainer}>
      <AccountItem label="Account 1" number="1900 8888 1234" balance="$20,000" location="London" />
      <AccountItem label="Account 2" number="8988 1234 5678" balance="$12,000" location="New York" />
      <AccountItem label="Account 3" number="1900 1234 2222" balance="$50,000" location="Florida" />
    </View>
  </View>
);

const AccountItem = ({ label, number, balance, location }) => (
  <View style={styles.accountRow}>
    <View>
      <Text style={styles.accountLabel}>{label}</Text>
      <Text style={styles.accountSubText}>{location}</Text>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.accountNumber}>{number}</Text>
      <Text style={styles.accountBalance}>{balance}</Text>
    </View>
  </View>
);

const CardView = () => (
  <View style={styles.cardList}>
    <BankCard name="Abdullateef Opeyemi" type="Amazon Platinum" number="4756 ** ** 9018" balance="$1,952.16" color="#1A5ADB" brand="VISA" />
    <BankCard name="Popoola Abdullateef" type="Amazon Premium" number="4756 ** ** 9018" balance="$3,469.52" color="#F2C94C" brand="MasterCard" />
  </View>
);

const BankCard = ({ name, type, number, balance, color, brand }) => (
  <View style={[styles.cardContainer, { backgroundColor: color }]}>
    <Text style={styles.cardName}>{name}</Text>
    <Text style={styles.cardType}>{type}</Text>
    <Text style={styles.cardNumber}>{number}</Text>
    <View style={styles.cardFooter}>
      <Text style={styles.cardBalance}>{balance}</Text>
      <Text style={styles.cardBrand}>{brand}</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FE' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8EBF3',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 4,
    marginTop: 10,
  },
  tab: { 
    flex: 1, 
    paddingVertical: 12, 
    alignItems: 'center', 
    borderRadius: 10 },
  activeTab: { 
    backgroundColor: '#1A5ADB' 
  },
  tabText: { 
    color: '#7E8494', 
    fontWeight: '600' 
  },
  activeTabText: { 
    color: '#FFF' 
  },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingTop: 20 
  },
  centerContent: { 
    alignItems: 'center' 
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 10 
  },
  profileName: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1A5ADB', 
    marginBottom: 30 
  },
  listContainer: { 
    width: '100%' 
  },
  accountRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 10
  },
  accountLabel: { 
    fontSize: 16, 
    fontWeight: '600' 
  },
  accountNumber: { 
    fontSize: 14, 
    color: '#7E8494' 
  },
  accountBalance: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#1A5ADB' 
  },
  accountSubText: { 
    fontSize: 12, 
    color: '#AAA' 
  },
  cardList: { 
    gap: 15 
  },
  cardContainer: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardName: { 
    color: '#FFF', 
    fontSize: 20, 
    fontWeight: '600' 
  },
  cardType: { 
    color: 'rgba(255,255,255,0.7)', 
    fontSize: 12 
  },
  cardNumber: { 
    color: '#FFF', 
    fontSize: 16, 
    letterSpacing: 2, 
    marginVertical: 10 
  },
  cardFooter: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  cardBalance: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  cardBrand: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontStyle: 'italic' 
  },
  addButton: {
    backgroundColor: '#1A5ADB',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});