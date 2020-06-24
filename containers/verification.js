import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';

import Button from '../components/button';
import BackBtn from '../components/backButton';
import { FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function App() {
  const [selected, setSelected] = useState(false);

  return (
    <View>
      <View>
        <BackBtn title="verify otp" />
        <Text
          style={{
            fontSize: '1.4rem',
            // fontFamily:'Montserrat Regular'
            color: '#ECDBFA',
          }}>
          Verify OTP sent to your mobile number
        </Text>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '1.5rem',
          }}>
          {[...Array(4).keys()].map((i, k) => (
            <View key={k} style={styles.inputCont}>
              <TextInput
                keyboardType={'phone-pad'}
                placeholderTextColor="#dacae8"
                maxLength={1}
                style={styles.inp}
              />
            </View>
          ))}
        </View>

        <Text
          style={{
            fontSize: '0.8rem',
            color: '#ECDBFA',
            // fontFamily:'Montserrat Regular'
            marginTop: '1rem',
          }}>
          01:00
        </Text>
      </View>

      <Button text="verify"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inp: {
    height: '3rem',
    outline: 'none',
    border: 'none',
    borderRadius: 10,
    padding: 10,
    // fontFamily:'Montserrat Bold'
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  inputCont: {
    width: '20%',
    height: '3rem',
    marginTop: '1rem',
    borderRadius: 10,
    backgroundImage:
      'linear-gradient(90deg, rgba(255,255,255,0.069) 0%, rgba(255,255,255,0.014) 100%)',
  },
});
