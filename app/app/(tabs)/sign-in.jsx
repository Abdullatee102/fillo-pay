import { 
  Text, Pressable, Image, Alert, View, TextInput, 
  TouchableOpacity, StyleSheet, ScrollView, 
  KeyboardAvoidingView, Platform 
} from "react-native";
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignIn = () => {
  const [identifier, setIdentifier] = useState(""); // Handles Email or Phone
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!identifier || !password) {
      Alert.alert("Required", "Please fill in all fields.");
      return;
    }
    // Logic for successful login
    Alert.alert('Success', 'Redirecting to Home...', [
      { text: 'OK', onPress: () => router.push('../(tabs)/home') }
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
          
          <Text style={styles.headerTitle}> Sign In </Text>

          <View style={styles.formCard}>
            <Image style={styles.logo} source={require('../../assets/images/logo1.png')}/>

            <TextInput
              placeholder="Email or Phone Number"
              style={styles.input}
              value={identifier}
              onChangeText={setIdentifier}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
              <Text style={styles.btnText}>Log In</Text> 
            </TouchableOpacity>

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <Pressable onPress={() => router.push('./sign-up')}>
                <Text style={styles.linkText}> Sign Up </Text>
              </Pressable>
            </View>

            <Pressable onPress={() => Alert.alert("Biometric Login", "Not implemented yet!") || router.push('./(tabs)/home')} style={styles.biometricContainer}>
              <Image style={styles.fingerprint} source={require('../../assets/images/fingerprint.png')}/>
            </Pressable>
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

export default SignIn;