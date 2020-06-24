import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import OutlineButton from '../components/outlineBtn';
import Button from '../components/button';
import Input from '../components/input';

const { height, width } = Dimensions.get('window');

export default function App() {
  const [selected, setSelected] = useState(false);
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
            <Text style={styles.dark}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ paddingLeft: 20 }}>
            <Text style={styles.text}>Signup</Text>
          </TouchableHighlight>
        </View>
      </View>

      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Phone Number" tel />
      <Input placeholder="Email" email />
      <Input placeholder="Password" password />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1rem',
        }}>
        <TouchableHighlight
          onPress={() => {
            setSelected(!selected);
          }}
          style={styles.check}>
          <FontAwesome name={selected && 'check'} size={12} color="#dc2eda" />
        </TouchableHighlight>

        <Text
          style={{
            marginTop: '0.7rem',
            color: '#dacae8',
            fontSize: '11px',
          }}>
          By clicking signup you agree to our
          <Text
            style={{ fontWeight: 'bold', color: '#fff', marginHorizontal: 5 }}>
            Terms & Conditions
          </Text>
          and
          <Text
            style={{ fontWeight: 'bold', color: '#fff', marginHorizontal: 5 }}>
            Privacy Policy
          </Text>
        </Text>
      </View>

      <Button text="sign up" />
      <OutlineButton text="Continue With Gmail" icon />
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
  check: {
    transform: 'skew(-10deg)',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    height: '1.2rem',
    width: '1.6rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #dc2eda',
  },
});
