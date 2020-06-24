import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';
import OutlineButton from '../components/outlineBtn';
import CheckBtn from '../components/checkBtn';

const { width, height } = Dimensions.get('window');

const OrderComplete = () => (
  <View style={styles.container}>
    <View style={styles.main}>
      <CheckBtn />
      <Text
        style={{ fontSize: '1.67rem', color: '#ECDBFA', marginVertical: 10 }}>
        Order Successful
      </Text>
      <Text style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.46)' }}>
        Your order will be delivered between 48-72 hours
      </Text>
    </View>

    <OutlineButton text="View Order" />
  </View>
);
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: height * 0.1,
  },
  main: {
    width: '60%',
    marginTop: height * 0.1,
  },
});

export default OrderComplete;
