import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Input = ({ placeholder, password, email, tel }) => (
  <TextInput
    secureTextEntry={password}
    placeholder={placeholder}
    placeholderTextColor="#ECDBFA"
    autoCompleteType={email}
    keyboardType={tel}
    style={styles.inp}
  />
);

const styles = StyleSheet.create({
  inp: {
    height: '3rem',
    marginTop: '1rem',
    outline: 'none',
    borderRadius: 10,
    border: 'none',
    padding: '10px',
    paddingLeft: 20,
    fontSize: '0.8rem',
    // fontFamily: 'Montserrat',
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.069) 0%, rgba(255,255,255,0.003) 100%)',
    color: '#ECDBFA',
  },
});

export default Input;
