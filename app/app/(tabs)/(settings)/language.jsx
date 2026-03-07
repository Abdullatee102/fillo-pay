import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const languagesData = [
  {
    id: '1',
    name: 'Vietnamese',
    flag: require('../../../assets/images/vietnam.png'),
  },
  {
    id: '2',
    name: 'French',
    flag: require('../../../assets/images/french.png'),
  },
  {
    id: '3',
    name: 'English',
    flag: require('../../../assets/images/gbritian.png'),
  },
  {
    id: '4',
    name: 'Japanese',
    flag: require('../../../assets/images/japan.png'),
  },
  {
    id: '5',
    name: 'Portuguese',
    flag: require('../../../assets/images/portugal.png'),
  },
  {
    id: '6',
    name: 'Chinese',
    flag: require('../../../assets/images/china.png'),
  },
  {
    id: '7',
    name: 'Korean',
    flag: require('../../../assets/images/korea.png'),
  },
  {
    id: '8',
    name: 'Nicaraguan',
    flag: require('../../../assets/images/nicaragua.png'),
  },
];

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('3'); 

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedLanguage;

    return (
      <TouchableOpacity
        style={styles.languageItem}
        onPress={() => setSelectedLanguage(item.id)}
        activeOpacity={0.7}
      >
        <View style={styles.leftSection}>
          <Image source={item.flag} style={styles.flag} />
          <Text style={styles.languageText}>{item.name}</Text>
        </View>

        {isSelected && (
          <Ionicons name="checkmark" size={22} color="#2F80ED" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
     <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <MaterialCommunityIcons name="chevron-left" size={32} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} >Language</Text>
        </View>

      
      <View style={styles.container}>

        <FlatList
          data={languagesData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
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
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 28,
    height: 20,
    marginRight: 15,
    resizeMode: 'contain',
  },
  languageText: {
    fontSize: 16,
  },

});

export default LanguageScreen;
