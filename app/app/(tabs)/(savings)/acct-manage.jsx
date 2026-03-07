import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountManagement = () => {
  
  const DetailRow = ({ label, value, isBold = false }) => (
    <View style={styles.detailRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, isBold && styles.boldValue]}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#1A202C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Management</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <DetailRow 
            label="Account" 
            value="1900 8988 5456" 
            isBold={true} 
          />

          <View style={styles.divider} />

          <DetailRow label="From" value="02/11/2023" />
          <DetailRow label="To" value="02/11/2024" />
          <DetailRow label="Time deposit" value="12 months" />
          <DetailRow label="Interest rate" value="5%" />
        </View>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit Details</Text>
        </TouchableOpacity>
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
  content: {
    padding: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: '#A0AEC0',
    fontWeight: '500',
  },
  value: {
    fontSize: 15,
    color: '#2D60FF', 
    fontWeight: '600',
  },
  boldValue: {
    color: '#1A202C',
    fontSize: 17,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 20,
  },
  editBtn: {
    marginTop: 30,
    padding: 15,
    alignItems: 'center',
  },
  editBtnText: {
    color: '#A0AEC0',
    fontSize: 14,
    textDecorationLine: 'underline',
  }
});

export default AccountManagement;