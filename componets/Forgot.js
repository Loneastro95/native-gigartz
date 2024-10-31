import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import logo from "../assets/White.png";
import { LinearGradient } from 'expo-linear-gradient';

export default function Forgot({ navigation }) {

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.Logincontainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={logo}
        />
        {/* <Text style={styles.loginText}>Login</Text> */}
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.innerInputContainer}>
            <Text style={styles.inputLable}>Email</Text>
            <LinearGradient
              colors={['rgba(13, 226, 214, 0.7)', 'rgba(239, 41, 219, 0.7)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBorder}
            >
              <TextInput
                style={styles.inputWithGradientBorder}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter email"
                placeholderTextColor="#fff"
              />
            </LinearGradient>
          </View>

          <Text style={styles.forgotText} onPress={() => navigation.navigate('login')}>Remember Password?</Text>
          <LinearGradient
            colors={['rgba(13, 226, 214, 0.7)', 'rgba(239, 41, 219, 0.7)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <TouchableOpacity style={styles.buttonContent}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </LinearGradient>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logincontainer: {
    flex: 1,
    backgroundColor: '#060512',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  logoContainer: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '18%',
    gap: 20,
  },
  innerContainer: {
    height: '50%',
    width: "94%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    borderBottomEndRadius: 40,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 40,


  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },

  inputContainer: {
    width: '100%',
    paddingTop: '10%',
    paddingBottom: '15%',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  innerInputContainer: {
    width: '90%',
    display: 'flex',
    gap: 16,
  },
  gradientBorder: {
    borderRadius: 10,
    padding: 2, // Adjust this for border thickness
  },
  inputWithGradientBorder: {
    backgroundColor: '#060512', // Match with your main background
    borderRadius: 8, // Inner border radius slightly less than outer
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#fff', // Text color
    width: '100%',
  },
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingLeft: 8,
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 1.8,

  },
  inputLable: {
    color: '#fff',
    fontSize: 17,
    paddingLeft: 10,

  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    borderRadius: 10,
    borderWidth: 3,
  },
  buttonText: {
    color: '#f8f8f8',
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    borderRadius: 10,
  },
  signUpLink: {
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
  },
  logo: {
    transform: [{ scale: .8 }]
  },
  forgotText: {
    color: 'rgba(13, 226, 214, 0.7)',
    width: '80%',
    textAlign: 'right',
  },
});