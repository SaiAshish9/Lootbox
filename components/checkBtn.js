import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Button = ({ text }) => (
  <TouchableHighlight style={{ border: 'none', outline: 'none' }}>
    <View style={styles.auth}>
      <View style={styles.borderBox}>
        <TouchableHighlight>
          <View style={styles.btn1}>
            <FontAwesome name={'check'} size={'1rem'} color="#dc2eda" />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  btn1: {
    width: '2.9rem',
    height: '2.9rem',
    textAlign: 'center',
    background: '#2a2b38',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBox: {
    background: 'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
    boxSizing: 'border-box',
    borderRadius: '50%',
    width: '3rem',
    height: '3rem',
    padding: 1,
  },
  auth: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Button;
