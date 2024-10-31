import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import logo from "../assets/logo.png"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({navigation}) {

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.homeContainer}>
      <TextInput style={styles.searchInput}></TextInput>
    </View>
  );
}