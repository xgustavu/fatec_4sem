import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

export default function Um() {
  return (
    <View style={styles.container}>
      <View style={styles.cima} />
      <View style={styles.baixo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    width: "100%"
  },
  cima: {
    flex: 0.5,
    backgroundColor: 'crimson',
  },
  baixo: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});
