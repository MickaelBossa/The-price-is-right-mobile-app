// Librairies
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

// Composants
import Logo from '../components/UI/Logo';

export default function Play() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.txt}>
        Retrouvez le juste prix entre
        <Text style={{ color: Colors.secondary, fontWeight: 'bold' }}> 0 </Text>
        et
        <Text style={{ color: Colors.secondary, fontWeight: 'bold' }}> 1000 </Text>
      </Text>
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
  txt: {
    marginTop: Dimensions.get('window').height * 0.02,
    },
  btn: {
    padding: Dimensions.get('window').width * 0.03,
    backgroundColor: Colors.primary,
    borderRadius: Dimensions.get('window').width * 0.015,
    marginTop: Dimensions.get('window').height * 0.05,
  },
});
