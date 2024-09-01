import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Mitr-Bold': require('../assets/fonts/Mitr-Bold.ttf'),
    'Mitr-Regular': require('../assets/fonts/Mitr-Regular.ttf'),
    'Mitr-Light': require('../assets/fonts/Mitr-Light.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
    if (error) {
      console.error("Error loading fonts: ", error);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    
  );
}
