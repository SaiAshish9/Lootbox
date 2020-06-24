import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SignUp from './containers/signup';
import Login from './containers/login';
import Verification from './containers/verification';
import OrderComplete from './containers/orderComplete'

const { height, width } = Dimensions.get('window');

export default function App() {
  //  <SignUp/>
  //  <Verification/>
  //  <Login />
  return (
    <View style={styles.container}>
      <OrderComplete/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'linear-gradient(180deg, #2A2D39 0%, #261D2A 100%)',
    padding: width * 0.1,
  },
});
