import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import logo from "../assets/logo.png"

export default function Signup() {

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.Logincontainer}>
      <View style={styles.logoContainer}>
      <Text style={styles.loginText}>Sign Up</Text>
      </View>
      <View style={styles.innerContainer}>
       <View style={styles.inputContainer}>
        <View style={styles.innerInputContainer}>
        <Text style={styles.inputLable}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter first name"
        />
        </View>
        <View style={styles.innerInputContainer}>
        <Text style={styles.inputLable}>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter last name"
        />
        </View>
        <View style={styles.innerInputContainer}>
        <Text style={styles.inputLable}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter email"
        />
        </View>
        <View style={styles.innerInputContainer}>
          <Text style={styles.inputLable}>Password</Text>
         <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter password"
          keyboardType="password"
        /> 
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.signUpLink}>Already have an account? Sigh In</Text>
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Logincontainer: {
    flex: 1,
    backgroundColor: '#081029',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  logoContainer: {
    height: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '18%'
  },
  innerContainer: {
    height: '75%',
    width: "94%",
    backgroundColor: "#fcfcfc",
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    borderBottomEndRadius: 40,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 40,
    paddingTop: '10%',
    justifyContent: 'space-around',
    
  },
  loginText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8f8f8'
  },
  inputContainer: {
    width: '100%',
    paddingTop: '10%',
    paddingBottom: '15%',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  innerInputContainer:{
    width: '90%',
    display: 'flex',
    gap: 16,
  }
  ,
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingLeft: 8,
    borderColor: '#0c0c0c',
    borderRadius: 10,
    borderWidth: 1.8,
    
  },
  inputLable: {
    color: '#0c0c0c',
    fontSize: 17,
    paddingLeft: 10,

  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: "#081029",
    width: '90%',
    borderRadius: 10,
  },
  buttonText: {
    color: '#f8f8f8',
    fontWeight: "bold",
    fontSize: 16,
  },
  signUpLink: {
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
  },
  logo: {
    transform: [{scale: 2}]
  }
});