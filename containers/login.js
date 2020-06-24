import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import OutlineButton from '../components/outlineBtn';
import Button from '../components/button';
import Input from '../components/input';

const { height, width } = Dimensions.get('window');

export default function App() {
  return (
    <View>
      <View style={styles.box}></View>

      <View style={styles.auth}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '1rem',
          }}>
          <TouchableHighlight
            style={{
              borderRight: '1px solid rgba(236,219,250, 0.24)',
              paddingRight: 20,
            }}>
            <Text style={styles.text}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ paddingLeft: 20 }}>
            <Text style={styles.dark}>Signup</Text>
          </TouchableHighlight>
        </View>
      </View>

      <Input placeholder="Phone Number Or Email" />
      <Input placeholder="Password" password />

      <Text
        style={{
          alignSelf: 'flex-end',
          marginTop: '0.7rem',
          color: '#ECDBFA',
          fontSize: 12,
          fontWeight: 'bold',
        }}>
        Forgot Password?
      </Text>

      <Button text="login" />
      <OutlineButton text="Continue With Gmail" icon={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: height * 0.16,
    width: width * 0.4,
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.069) 0%, rgba(255,255,255,0.014) 100%)',
    borderRadius: 10,
    marginTop: height * 0.05,
    marginHorizontal: width * 0.15,
    marginBottom: height * 0.08,
  },
  auth: {
    marginLeft: width * 0.1,
  },
  text: {
    color: '#ECDBFA',
    fontSize: '1.3rem',
  },
  dark: {
    color: '#ECDBFA',
    opacity: 0.24,
    fontSize: '1.3rem',
  },
});
