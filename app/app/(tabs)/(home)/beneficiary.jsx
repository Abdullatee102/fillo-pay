import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView,Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const BeneficiaryDetails = () => {
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleConfirm = () => {
    if (!bank || !branch || !name || !accountNumber) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    Alert.alert("Success", "Beneficiary confirmed!");
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Beneficiary</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.profileSection}>
            <Image 
              source={require('../../../assets/images/boy.jpg')}
              style={styles.avatar} 
            />
            <Text style={styles.userName}>{name}</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Choose Bank</Text>
            <TextInput 
              style={styles.input} 
              value={bank} 
              onChangeText={setBank} 
            />

            <Text style={styles.label}>Choose Branch</Text>
            <TextInput 
              style={styles.input} 
              value={branch} 
              onChangeText={setBranch} 
            />

            <Text style={styles.label}>Beneficiary Name</Text>
            <TextInput 
              style={styles.input} 
              value={name} 
              onChangeText={setName} 
            />

            <Text style={styles.label}>Account Number</Text>
            <TextInput 
              style={styles.input} 
              value={accountNumber} 
              keyboardType="numeric"
              onChangeText={setAccountNumber} 
            />
          </View>

          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
            <Text style={styles.confirmBtnText}>Confirm</Text>
          </TouchableOpacity>
        </View>

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
    backgroundColor: 'rgb(71, 71, 129)',
    height: 200,
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButton: {
    marginTop: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
    marginTop: 8,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -80, 
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, height: 5 
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D60FF',
    marginTop: 10,
  },
  form: {
    marginTop: 10,
  },
  label: {
    fontSize: 12,
    color: '#A0AEC0',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: '#1A202C',
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingVertical: 8,
    marginBottom: 25,
  },
  confirmBtn: {
    backgroundColor: '#2D60FF',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BeneficiaryDetails;