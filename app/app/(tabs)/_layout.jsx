import { Stack } from "expo-router"
import {useEffect} from 'react';
import { useAuthStore } from "../(tabs)/(tabs)/store";
import { ActivityIndicator, View } from "react-native";

const RootLayout = () => {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    initializeAuth();
  }, []);

  if (isLoading) {
    return ( 
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0052ff" />
      </View>
    );
  }

  return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='onboarding'/>
      <Stack.Screen name='sign-up'/>
      <Stack.Screen name='sign-in'/>
      <Stack.Screen name='home'/>
      
    </Stack>
  );
};

export default RootLayout;