import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStore = create((set) => ({
  email: null,
  isLoading: true,

  initializeAuth: async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('user_session');
      if (savedEmail) {
        set({ email: savedEmail, isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      set({ isLoading: false });
    }
  },

  login: async (emailData) => {
    await AsyncStorage.setItem('user_session', JSON.stringify(emailData));
    set({ email: emailData.email, isLoading: false });
  },

  signup: async (emailData) => {
    await AsyncStorage.setItem('user_session', JSON.stringify(emailData));
    set({ email: emailData.email, isLoading: false });
  },

  logout: async () => {
    await AsyncStorage.removeItem('user_session');
    set({ email: null, isLoading: false });
  },
}));