import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const Button = ({ title, subtitle, cart }) => (
  <TouchableHighlight style={{ border: 'none', outline: 'none' }}>
    <View style={styles.auth}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.borderBox}>
          <TouchableHighlight>
            <View style={styles.btn}>
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
            opacity: !subtitle && 0.5,
            fontSize: '1rem',
            color: '#fff',
            textTransform: 'uppercase',
            // fontFamily:'Montserrat Italic'
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            marginLeft: 10,
            opacity: 0.5,
            color: '#fff',
            fontSize: '0.8rem',
            // fontFamily:'Montserrat Italic'
          }}>
          {subtitle}
        </Text>
      </View>
      {cart && (
        <View>
          <View style={styles.tag}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '0.7rem',
                textAlign: 'center',
              }}>
              2
            </Text>
          </View>
          <View style={styles.borderBox1}>
            <TouchableHighlight>
              <View style={styles.btn1}>
                <Image
                  style={{
                    height: '0.8rem',
                    marginTop: 5,
                    width: '1.2rem',
                    transform: 'rotate(180deg)',
                  }}
                  source={require('../assets/images/cart.png')}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  btn: {
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

  borderBox1: {
    // background: 'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
    display: 'flex',
    border: '1px solid #b02da7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '2.2rem',
    position: 'relative',
    bottom: 5,
    transform: 'perspective(30px) rotateX(160deg)',
    // padding: '10px 2px',
    height: '2rem',
  },
  auth: {
    marginVertical: height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tag: {
    width: '1rem',
    height: '1.1rem',
    borderRadius: 10,
    background: 'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
    boxShadow: '15px 13px 21px 0 rgba(139,85,234,0.16)',
    position: 'relative',
    top: 1,
    left: '1.8rem',
    zIndex: 1,
  },
});

export default Button;
