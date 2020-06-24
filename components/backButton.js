import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

const {height,width} = Dimensions.get('window')

const Button = ({ title }) => (
  <TouchableHighlight style={{ border: 'none', outline: 'none' }}>
    <View style={styles.auth}>
      <View style={styles.borderBox}>
        <TouchableHighlight>
          <View style={styles.btn1}>
            <Image
              style={{ height: '0.8rem' }}
              source={require('../assets/images/arrowleft.png')}
            />
          </View>
        </TouchableHighlight>
      </View>
      <Text
        style={{
          fontStyle: 'italic',
          marginLeft: 10,
          opacity: 0.5,
          color: '#fff',
          textTransform:'uppercase'
          // fontFamily:'Montserrat Italic'
        }}>
        {title}
      </Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  btn1: {
    padding: 9,
    width: '2.3rem',
    textAlign: 'center',
    background: '#2a2b38',
    borderRadius: 10,
  },
  borderBox: {
    background: 'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
    boxSizing: 'border-box',
    borderRadius: 10,
    width: '2.46rem',
    transform: 'skew(-10deg)',
    padding: 1.5,
  },
    auth: {
    marginVertical: height * 0.05,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Button;
