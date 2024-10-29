import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './componets/Login';
import Signup from './componets/Signup';
import OnBoardingPage from './componets/OnboardingPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="onboard">
      <Stack.Screen name="onboard" options={{ headerShown: false }}  component={OnBoardingPage} />
        <Stack.Screen name="login" options={{ headerShown: false }}  component={Login} />
        <Stack.Screen name="signup" options={{ headerShown: false }}  component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
