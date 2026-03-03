import { 
  Text, Pressable, Image, Alert, View, TextInput, 
  TouchableOpacity, StyleSheet, ScrollView, 
  KeyboardAvoidingView, Platform 
} from "react-native";
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const validateAndSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    if (phone.length < 10 || isNaN(phone)) {
      Alert.alert("Invalid Phone", "Please enter a valid phone number.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Weak Password", "Please, enter a password with at least 6 characters.");
      return;
    }

    Alert.alert('Account Created', 'Please Sign In.', [
      { text: 'OK', onPress: () => router.push('./sign-in') }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
          <Image style={styles.statusBar} source={require('../../assets/images/status-bar.png')}/>
          
          <Text style={styles.headerTitle}> Sign Up </Text>

          <View style={styles.formCard}>
            <Image style={styles.logo} source={require('../../assets/images/logo2.png')}/>

            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
            />            

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.primaryBtn} onPress={validateAndSignUp}>
              <Text style={styles.btnText}>Sign up</Text> 
            </TouchableOpacity>

            <View style={[styles.footerRow, { marginTop: 40 }]}>
              <Text style={styles.footerText}>Have an account?</Text>
              <Pressable onPress={() => router.push('./sign-in')}>
                <Text style={styles.linkText}> Sign In </Text>
              </Pressable>
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
    width: '85%', height: 55, borderColor: '#DDD', 
    borderWidth: 1, borderRadius: 15, paddingHorizontal: 15, 
    marginBottom: 15, alignSelf: 'center', fontSize: 16
  },
  primaryBtn: {
    width: '85%', height: 55, backgroundColor: '#0C00DF', 
    borderRadius: 15, justifyContent: 'center', 
    alignItems: 'center', alignSelf: 'center', marginTop: 10
  },
  btnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  footerRow: { 
    flexDirection: 'row', justifyContent: 'center', 
    alignItems: 'center', marginTop: 20 
  },
  footerText: { fontSize: 16, color: '#444' },
  linkText: { fontSize: 16, color: '#0C00DF', fontWeight: 'bold' },
  statusBar: { width: '100%', height: 40 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginVertical: 35 },
  biometricContainer: { marginTop: 30 },
  fingerprint: { width: 60, height: 60, alignSelf: 'center' },
});

export default SignUp;