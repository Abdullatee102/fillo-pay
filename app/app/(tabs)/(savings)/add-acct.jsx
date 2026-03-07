import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; 

const AddAccount = () => {
  const [accountCard, setAccountCard] = useState('');
  const [timeDeposit, setTimeDeposit] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddAccount = async () => {
    if (!accountCard || !timeDeposit) {
      Alert.alert("Missing Info", "Please fill in all fields to continue.");
      return;
    }

    setLoading(true);
    try {
      const db = getFirestore();
      await addDoc(collection(db, "savings_accounts"), {
        account_card: accountCard,
        deposit_type: timeDeposit,
        created_at: new Date(),
      });

      Alert.alert("Success", "Account added successfully!");
      router.back();
    } catch (error) {
      Alert.alert("Error", "Could not save account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#1A202C" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add</Text>
        </View>

        <View style={styles.content}>
          <Image 
            source={require('../../../assets/images/add-img.png')} 
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Choose account/card"
              placeholderTextColor="#A0AEC0"
              value={accountCard}
              onChangeText={setAccountCard}
            />

            <TextInput
              style={styles.input}
              placeholder="Choose time deposit"
              placeholderTextColor="#A0AEC0"
              value={timeDeposit}
              onChangeText={setTimeDeposit}
            />
          </View>

          <TouchableOpacity 
            style={[styles.submitBtn, loading && { opacity: 0.7 }]} 
            onPress={handleAddAccount}
            disabled={loading}
          >
            <Text style={styles.submitBtnText}>
              {loading ? "Saving..." : "Confirm"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: '100%',
    height: 250,
    marginTop: 20,
    marginBottom: 40,
  },
  form: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 15,
    padding: 18,
    fontSize: 16,
    color: '#1A202C',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  submitBtn: {
    backgroundColor: '#2D60FF',
    width: '100%',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddAccount;