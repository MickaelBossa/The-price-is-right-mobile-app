// Librairies
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

// Composants
import Logo from '../components/UI/Logo';

export default function Play() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Retrouvez le juste prix entre 0 et 1000</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: '#fff' }}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginTop: 25,
  },
});
