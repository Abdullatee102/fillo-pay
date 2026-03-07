import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: 'Welcome to iBank',
      description: 'Your all-in-one financial companion.',
      image: require('../../assets/images/onboarding1.png'),
    },
    {
      title: 'Track Your Finances',
      description: 'Easily monitor your spending and savings.',
      image: require('../../assets/images/onboarding2.png'),
    },
    {
      title: 'Secure and Reliable',
      description: 'Your data is safe with us.',
      image: require('../../assets/images/onboarding3.png'),
    },
  ];
  
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      router.push('./sign-up');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={pages[currentPage].image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{pages[currentPage].title}</Text>
      <Text style={styles.description}>{pages[currentPage].description}</Text>
      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>{currentPage === pages.length - 1 ? 'Get Started' : 'Next'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(88, 88, 206)' },
  image: { width: 300, height: 300, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#fff', textAlign: 'center', paddingHorizontal: 20, marginBottom: 30 },
  button: { backgroundColor: '#007AFF', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
}); 