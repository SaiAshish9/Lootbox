import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import BackBtn from '../components/backButton';
import Box from '../components/box';
const { width, height } = Dimensions.get('window');

const color = '#ECDBFA';

const Orders = () => (
  <View>
    <BackBtn title="my orders" />
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: height * 0.05,
      }}>
      <Text
        style={{
          color,
          fontWeight: 'bold',
          marginRight: 10,
          // fontFamily: 'Montserra'

          fontSize: '0.8rem',
        }}>
        Active
      </Text>
      <Text
        style={{
          color,
          fontWeight: 'bold',
          opacity: 0.4,
          // fontFamily: 'Montserra'
          fontSize: '0.8rem',
        }}>
        Past
      </Text>
    </View>
    {[...Array(3).keys()].map((_, k) => (
      <Box skew key={k}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{ color, fontSize: '1rem' }}>2344552</Text>
          <Text style={{ color, fontSize: '1rem' }}>KD 4,500</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{ color, fontSize: '0.8rem', opacity: 0.5 }}>
            Order ID
          </Text>
          <Text style={{ color, fontSize: '0.8rem', opacity: 0.5 }}>
            4 Items
          </Text>
        </View>
        <Text style={{ color, opacity: 0.5, fontSize: '0.8rem' }}>
          Will be delivered in 3-4 days
        </Text>
      </Box>
    ))}
  </View>
);

const styles = StyleSheet.create({});

export default Orders;
