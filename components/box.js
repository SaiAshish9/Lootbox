import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Box = ({ children, skew }) => (
  <View style={skew ? styles.box1 : styles.box}>{children}</View>
);

const styles = StyleSheet.create({
  box1: {
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.069) 0%, rgba(255,255,255,0.003) 100%)',
    width: width * 0.8,
    borderRadius: 15,
    marginVertical: 10,
    padding: 20,
    transform: 'skew(-6deg)'
  },
  box: {
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.069) 0%, rgba(255,255,255,0.003) 100%)',
    width: width * 0.8,
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
  },
});

export default Box;
