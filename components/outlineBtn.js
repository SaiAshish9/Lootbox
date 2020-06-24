import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Button = ({ text, icon }) => (
  <TouchableHighlight style={{ border: 'none', outline: 'none' }}>
    <View style={styles.borderBox}>
      <TouchableHighlight>
        <View style={styles.btn1}>
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>
            {icon && (
              <Ionicons
                name="logo-google"
                size={20}
                color="#dc2eda"
                style={{ marginRight: 10 }}
              />
            )}
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  btn1: {
    padding: 13,
    textAlign: 'center',
    backgroundImage:
      'linear-gradient(180deg,rgba(184,37,154,0.16) 0%,rgba(184,37,154,0.16) 100%)',
    borderRadius: 10,
    border: '1px solid #C01C8A',
  },
  borderBox: {
    // backgroundImage:
    //   'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
    boxSizing: 'border-box',
    borderRadius: 10,
    transform: 'skew(-10deg)',
    padding: 1.5,
    marginHorizontal: 10,
  },
});

export default Button;
