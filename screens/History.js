// Librairies
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique</Text>
      <Text style={styles.information}>Faites au moins une partie pour avoir accès à votre historique</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Dimensions.get('window').width * 0.05,
  },
  title: {
    fontSize: Dimensions.get('window').width * 0.1,
    color: Colors.primary,
  },
  information : {
    textAlign: 'center',
    marginTop: Dimensions.get('window').width * 0.05,
  }
})
