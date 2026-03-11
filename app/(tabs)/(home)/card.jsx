import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CardDetailView = () => {
  const cardData = [
    { label: 'Name', value: 'Abdullateef' },
    { label: 'Card number', value: '** ** 7890' },
    { label: 'Valid from', value: '10/24' },
    { label: 'Valid thru', value: '10/28' },
    { label: 'Available Balance', value: '$10,000' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backButton}>{'  Card'}</Text>
      </View>
      
      <View style={styles.content}>
        {cardData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(71, 71, 129)', padding: 20 },
  header: { marginBottom: 30 },
  backButton: { fontSize: 18, color: '#fff', fontWeight: '600' },
  content: { marginTop: 10 },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
  },
  label: { fontSize: 16, color: '#888' },
  value: { fontSize: 16, color: '#007AFF', fontWeight: 'bold' }
});

export default CardDetailView;