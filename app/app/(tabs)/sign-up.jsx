import { Text, Pressable, Image, Alert, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from 'react';
import auth from '@react-native-firebase/auth'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useAuthStore } from "../(tabs)/(tabs)/store";

const SignUp = () => {
  const signup = useAuthStore((state) => state.signup);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Sign Up Error", "Passwords do not match.");
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await signup({email}); 
      Alert.alert('Account Created', 'Please Sign In.', [{ text: 'OK', onPress: () => router.push('./sign-in') }]);
    } catch (error) {
      Alert.alert("Sign Up Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1}}>
        <ScrollView contentContainerStyle={{ flex: 1, marginTop: 50 }} bounces={false}>
          <Text style={styles.headerTitle}> Sign Up </Text>
          <View style={styles.formCard}>
            <Image style={styles.logo} source={require('../../assets/images/logo2.png')}/>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
            <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} />
            <TouchableOpacity style={styles.primaryBtn} onPress={handleSignUp}>
              <Text style={styles.btnText}>Sign up</Text> 
            </TouchableOpacity>
            <View style={styles.btnContainer}>
              <Text style={styles.btnTextContainer}>Have an account?</Text>
              <Pressable onPress={() => router.push('./sign-in')}><Text style={styles.linkText}> Sign In </Text></Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'blue' },
  headerTitle: { 
    fontSize: 22, fontWeight: 'bold', alignSelf: 'center', 
    marginVertical: 20, color: 'white' 
  },
  formCard: { 
    flex: 1, backgroundColor: 'white', 
    borderTopLeftRadius: 30, borderTopRightRadius: 30,
    paddingTop: 10, paddingBottom: 30
  },
  input: {
    width: '85%', 
    height: 55, 
    borderColor: '#DDD', 
    borderWidth: 1, 
    borderRadius: 15, 
    paddingHorizontal: 15, 
    marginBottom: 15, 
    alignSelf: 'center', 
    fontSize: 16,
    backgroundColor: '#b4b0b0',
  },
  primaryBtn: {
    width: '85%', 
    height: 55, 
    backgroundColor: '#0C00DF', 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', alignSelf: 'center', marginTop: 10
  },
  btnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  btnContainer: { 
    flexDirection: 'row', justifyContent: 'center', 
    alignItems: 'center', marginTop: 40 
  },
  btnTextContainer: { fontSize: 16, color: '#000' },
  linkText: { fontSize: 16, color: '#0C00DF', fontWeight: 'bold' },
  statusBar: { width: '100%', height: 40 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginVertical: 35 },
  biometricContainer: { marginTop: 30 },
  fingerprint: { width: 60, height: 60, alignSelf: 'center' },
});

export default SignUp;