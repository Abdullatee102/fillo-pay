import { Text, Pressable, Image, Alert, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from 'react';
import auth from '@react-native-firebase/auth'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useAuthStore } from "../(tabs)/(tabs)/store";

const SignIn = () => {
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBiometricSignIn = () => {
    Alert.alert('Biometric Sign-In', 'Biometric authentication is not implemented yet.');
  };

  const handleSignIn = async () => {
    if (!email || !password) {
        Alert.alert('Invalid Credentials', 'Please enter the correct email and password.');
        return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      await login({email});
      Alert.alert('Sign In Successful', 'You are signed in!', [{ text: 'OK', onPress: () => router.push('../home') }]); 
    }
    catch (error) {
      Alert.alert("Sign In Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1, marginTop: 40 }} bounces={false}>
          <Text style={styles.headerTitle}> Sign In </Text>
          <View style={styles.formCard}>
            <Image style={styles.logo} source={require('../../assets/images/logo1.png')}/>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
            <TouchableOpacity style={styles.primaryBtn} onPress={handleSignIn}>
              <Text style={styles.btnText}>Sign in</Text> 
            </TouchableOpacity>
            <View style={[styles.footerRow, { marginTop: 40 }]}>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <Pressable onPress={() => router.push('./sign-up')}>
                <Text style={styles.linkText}> Sign Up </Text>
              </Pressable>
              <Pressable style={styles.biometricContainer} onPress={handleBiometricSignIn}>
                <Image source={require('../../assets/images/fingerprint.png')} style={styles.fingerprint} />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'blue',},
  headerTitle: { 
    fontSize: 22, fontWeight: 'bold', alignSelf: 'center', 
    marginVertical: 20, color: 'white' 
  },
  formCard: { 
    flex: 1, backgroundColor: 'white',
    borderTopLeftRadius: 30, borderTopRightRadius: 30,
    paddingTop: 70, marginTop: 10
  },
  input: {
    width: '85%',
    marginBottom: 15, 
    alignSelf: 'center',
    fontSize: 16,
    backgroundColor: '#b4b0b0',
    color: 'black',
    height: 55,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  primaryBtn: {
    width: '85%',
    height: 55,
    backgroundColor: '#0C00DF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  btnText: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  footerRow: { 
    justifyContent: 'center', 
    alignItems: 'center', marginTop: 20 
  },
  footerText: { fontSize: 16, color: '#000', position: 'absolute', left: 70, top: 0 },
  linkText: { fontSize: 16, color: '#0C00DF', fontWeight: 'bold', position: 'absolute', left: '12%', top: 0 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginVertical: 35 },
  biometricContainer: { marginTop: 80 },
  fingerprint: { width: 60, height: 60, alignSelf: 'center', },

});

export default SignIn;  