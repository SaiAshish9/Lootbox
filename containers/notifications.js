import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import BackBtn from '../components/backButton';
import Box from '../components/box';
const { width, height } = Dimensions.get('window');

const Notifications = () => (
  <View>
    <BackBtn title="notifications" />
    {[...Array(3).keys()].map((_, k) => (
      <Box key={k}>
        <Text
          style={{ marginBottom: 10, color: '#ECDBFA', fontWeight: 'bold' }}>
          Ramadan Sale
        </Text>
        <Text style={{ color: '#ECDBFA', opacity: 0.5 }}>
          Get 50% Discount on all the products.
        </Text>
      </Box>
    ))}
    A
  </View>
);

const styles = StyleSheet.create({});

export default Notifications;
