import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import logo from "../assets/file.png";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGoogle, faFacebook, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Signup({ navigation }) {

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
            <Text style={styles.inputLable}>Name</Text>
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
                placeholder="Enter name"
                placeholderTextColor="#fff"
              />
            </LinearGradient>
          </View>
        <View style={styles.innerInputContainer}>
            <Text style={styles.inputLable}>Username</Text>
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
                placeholder="Enter username"
                placeholderTextColor="#fff"
              />
            </LinearGradient>
          </View>

          <View style={styles.innerInputContainer}>
            <Text style={styles.inputLable}>Phone number</Text>
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
                placeholder="Enter phone number"
                placeholderTextColor="#fff"
              />
            </LinearGradient>
          </View>
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

          <View style={styles.innerInputContainer}>
            <Text style={styles.inputLable}>Password</Text>
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
                placeholder="Enter password"
                placeholderTextColor="#fff"
              />
            </LinearGradient>
          </View>
          <Text style={styles.forgotText}>Term and Conditions</Text>
          <LinearGradient
            colors={['rgba(13, 226, 214, 0.7)', 'rgba(239, 41, 219, 0.7)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <TouchableOpacity  style={styles.buttonContent}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.orText}> ──── OR ────</Text>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faGoogle} size={32} color= 'rgba(13, 226, 214, 0.7)' />
            <FontAwesomeIcon icon={faFacebook} size={32} color= 'rgba(13, 226, 214, 0.7)' />
            <FontAwesomeIcon icon={faXTwitter} size={32} color= 'rgba(13, 226, 214, 0.7)' />
            <FontAwesomeIcon icon={faLinkedin} size={32} color= 'rgba(13, 226, 214, 0.7)' />
          </View>
        </View>
        <Text style={styles.haveText}>Already have an account? <Text style={styles.underline} onPress={() => navigation.navigate('login')}>Sigh In</Text></Text>
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
    height: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '18%',
    gap: 20,
  },
  innerContainer: {
    height: '95%',
    width: "94%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    borderBottomEndRadius: 40,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 40,
    // paddingTop: '10%',
    justifyContent: 'space-around',

  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  inputContainer: {
    width: '100%',
    // paddingTop: '10%',
    // paddingBottom: '15%',
    display: 'flex',
    alignItems: 'center',
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
  innerInputContainer: {
    width: '90%',
    display: 'flex',
    gap: 16,
  }
  ,
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
    // transform: [{ scale: 2}]
  },
  forgotText: {
    color: 'rgba(13, 226, 214, 0.7)',
    width: '80%',
    textAlign: 'left',
  },
  orText: {
    color: '#fff',
    width: '80%',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18,
    marginTop: 5,
    width: '80%',
    justifyContent: 'center'
  },
  haveText: {
    color: '#fff',
    width: '80%',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  underline: {
    color: 'rgba(13, 226, 214, 0.7)',
    textDecorationLine: 'underline',
  }
});