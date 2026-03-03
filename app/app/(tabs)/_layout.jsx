import { Stack } from "expo-router"


const RootLayout = () => {

  return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='onboarding'/>
      <Stack.Screen name='sign-up'/>
      <Stack.Screen name='sign-in'/>
      
    </Stack>
  );
};

export default RootLayout;