import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const Button = ({ text, rtext, flex }) => (
  <TouchableHighlight style={{ border: 'none', outline: 'none' }}>
    <View style={styles.btn}>
      {!flex ? (
        <Text
          style={{
            fontWeight: 'bold',
            color: '#fff',
            textTransform: 'uppercase',
          }}>
          {text}
        </Text>
      ) : (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal:10
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              textTransform: 'uppercase',
            }}>
            {text}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {rtext}
          </Text>
        </View>
      )}
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  btn: {
    marginTop: '1.5rem',
    marginBottom: '1rem',
    padding: 15,
    textAlign: 'center',
    background: 'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
    boxShadow: '15px 13px 21px 0 rgba(139,85,234,0.16)',
    borderRadius: 10,
    transform: 'skew(-10deg)',
    marginHorizontal: 10,
  },
});

export default Button;
