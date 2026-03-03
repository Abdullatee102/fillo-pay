import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import FSafeView from '../../../components/safeView';

const AccountChat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, type: 'received', content: 'Your account is limited. Please follow the instructions to verify your account.' },
    { id: 2, type: 'sent', content: 'Ok' },    
  ]);

  const sendMessage = () => {
    if (text.trim().length > 0) {
      setMessages([...messages, { id: Date.now(), type: 'sent', content: text }]);
      setText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Pressable onPress={()=> {router.back()}} style={{padding: 5}}>
            <Ionicons name="chevron-back" size={24} color="#007AFF" />
          </Pressable>
          <Text style={styles.headerTitle}>Account</Text>
        </View>

        <ScrollView contentContainerStyle={styles.chatList}>
          {messages.map((msg) => (
            <View key={msg.id} style={msg.type === 'sent' ? styles.sentRow : styles.receivedRow}>
              <View style={msg.type === 'sent' ? styles.sentBubble : styles.receivedBubble}>
                <Text style={msg.type === 'sent' ? styles.sentText : styles.msgText}>
                  {msg.content}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
            <Ionicons name="arrow-up" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  chatList: { padding: 15 },
  receivedRow: { alignSelf: 'flex-start', marginBottom: 10 },
  sentRow: { alignSelf: 'flex-end', marginBottom: 10 },
  receivedBubble: { backgroundColor: '#F1F1F1', padding: 12, borderRadius: 15, maxWidth: '80%' },
  sentBubble: { backgroundColor: '#007AFF', padding: 12, borderRadius: 15 },
  sentText: { color: '#fff' },
  msgText: { color: '#000' },
  inputContainer: { flexDirection: 'row', padding: 10, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#eee' },
  input: { flex: 1, backgroundColor: '#F2F2F7', borderRadius: 20, paddingHorizontal: 15, height: 40, marginRight: 10 },
  sendBtn: { backgroundColor: '#007AFF', width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }
});

export default AccountChat;