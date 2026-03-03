import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const MESSAGES_DATA = [
  { id: 'chat-msg', title: 'Bank of America', subtitle: 'Bank of America: 206488 is the code...', time: 'Today', image: require('../../../assets/images/bank.png'), color: '#086af3' },
  { id: 'account-msg', title: 'Account', subtitle: 'Your account is limited. Please follow the...', time: '10/18', image: require('../../../assets/images/account.png'), color: '#FF5A5F' },
  { id: 'alert-msg', title: 'Alert', subtitle: 'Your statement is ready for you to...', time: '10/15', image: require('../../../assets/images/alert.png'), color: '#0070E0' },
  { id: 'paypal-msg', title: 'Paypal', subtitle: 'Your account has been locked. Please...', time: '10/11', image: require('../../../assets/images/paypal.png'), color: '#FFB400' },
  { id: 'withdraw-msg', title: 'Withdraw', subtitle: 'Dear customer, 258745 is your code...', time: '10/10', image: require('../../../assets/images/withdraw.png'), color: '#40E0D0' },
];

const MessageScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredMessages = MESSAGES_DATA.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push(`../(message)/${item.id}`)}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Image source={item.image} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backArrow}>{'<'}</Text>
          <Text style={styles.headerTitle}>Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search messages..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <FlatList
        data={filteredMessages} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No matches found</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15
  },
  backArrow: {
    fontSize: 24,
    fontWeight: '300',
    marginRight: 10,
    color: '#fff'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchSection: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: '#FFF',
    height: 45,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#AAA',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#AAA',
  }
});

export default MessageScreen;