import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import BackBtn from '../components/backButton';
import Box from '../components/box';
import Button from '../components/button';
import OutlineBtn from '../components/outlineBtn';
const { width, height } = Dimensions.get('window');

const color = '#ECDBFA';

const options = [
  {
    img:
      'https://cdn.pixabay.com/photo/2015/03/21/06/27/technology-683243_960_720.png',
    title: 'Intel i7 6469k',
    desc: 'CPU',
    price: 'KD 2,520',
  },
  {
    img:
      'https://cdn.pixabay.com/photo/2015/03/21/06/27/technology-683243_960_720.png',
    title: 'Nvidia GTX 1080 Ti',
    desc: 'CPU',
    price: 'KD 1,500',
  },
  {
    img:
      'https://cdn.pixabay.com/photo/2015/03/21/06/27/technology-683243_960_720.png',
    title: 'Samsung TL-102',
    desc: 'Monitor',
    price: 'KD 500',
  },
];

const details = [
  {
    text: 'CPU ',
    desc: 'i7 6469k',
    price: 'KD 4,522',
  },
  {
    text: 'GPU',
    desc: 'Geforce GTX 1080ti',
    price: 'KD 1,500',
  },
  {
    text: 'Display',
    desc: 'Samsung LT-2102',
    price: 'KD 500',
  },
  {
    text: 'Delivery Fees',
    desc: '',
    price: 'KD2',
  },
];

const Cart = () => (
  <View>
    <BackBtn title="your cart" subtitle="(2 Items)" />

    <View
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Image
        source={require('../assets/images/pc.png')}
        style={{
          height: height * 0.2,
          width: width * 0.4,
          marginBottom: height * 0.05,
        }}
      />
      <View style={{ marginLeft: 15, alignSelf: 'flex-start' }}>
        <Text
          style={{
            color: '#ECDBFA',
            fontSize: '1.3rem',
            marginTop: height * 0.05,
          }}>
          Alpha Fury
        </Text>
        <Text
          style={{
            color: '#ECDBFA',
            fontSize: '0.8rem',
            opacity: 0.5,
            marginVertical: 5,
          }}>
          KD 4,500
        </Text>
      </View>
    </View>
    {options.map((i, k) => (
      <Box skew key={k}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image
            source={{ uri: i.img }}
            style={{
              height: 51,
              width: 62,
              position: 'relative',
              right: 40,
            }}
          />
          <View style={{ position: 'relative', right: 30 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                width: width * 0.38,
              }}>
              <Text
                style={{
                  color: '#D2D7F9',
                  fontSize: '0.85rem',
                  opacity: 0.87,
                  fontWeight: 'bold',
                }}>
                {i.title}
              </Text>
            </View>
            <View>
              <Text style={{ color, fontSize: '0.85rem', opacity: 0.5 }}>
                {i.price}
              </Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ color, fontSize: '0.8rem', opacity: 0.5 }}>
              {i.desc}
            </Text>
          </View>
        </View>
      </Box>
    ))}
    <Box skew>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text style={{ color, fontSize: '0.8rem', opacity: 0.5 }}>
          Deliver to
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#D2D7F9',
            fontSize: '0.85rem',
            opacity: 0.87,
            fontWeight: 'bold',
          }}>
          1295 Mateo Summit
        </Text>
        <Text style={{ color: '#DF2EDC', fontSize: '0.8rem' }}>Change</Text>
      </View>
    </Box>

    <Box>
      <View>
        <Text style={{ color: '#fff', fontSize: '0.8rem', marginBottom: 30 }}>
          Package Details (4 Items)
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#979797',
          borderBottomWidth: 1,
          boxSizing: 'border-box',
          opacity: 0.12,
          position: 'absolute',
          width: width * 0.8,
          left: 0,
          top: height * 0.09,
        }}></View>

      {details.map((i, k) => (
        <View
          key={k}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 7,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text
              style={{ color: '#fff', fontSize: '0.8rem', marginRight: 10 }}>
              {i.text}
            </Text>
            <Text style={{ color: '#fff', fontSize: '0.8rem', opacity: 0.4 }}>
              {i.desc}
            </Text>
          </View>
          <Text style={{ color: '#fff', fontSize: '0.8rem', opacity: 0.4 }}>
            {i.price}
          </Text>
        </View>
      ))}

      <View
        style={{
          borderBottomColor: '#979797',
          borderBottomWidth: 1,
          boxSizing: 'border-box',
          opacity: 0.12,
          position: 'absolute',
          width: width * 0.8,
          left: 0,
          bottom: height * 0.09,
        }}></View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>
          Total
        </Text>
        <Text style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>
          KD 4,522
        </Text>
      </View>
    </Box>

    <Button flex text="PAY" rtext="KD 4,500" />
    <Text
      style={{
        textAlign: 'center',
        margin: 10,
        opacity: 0.5,
        color: '#fff',
        fontSize: '0.8rem',
      }}>
      Forgot to add something?
    </Text>
    <OutlineBtn text="Continue Shopping" />
  </View>
);

const styles = StyleSheet.create({});

export default Cart;
