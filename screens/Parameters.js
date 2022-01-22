// Librairies
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';

export default function Parameters() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <View style={styles.parametersCard}>
        <View style={styles.form}>
        <Text style={styles.txt}>Prix minimum</Text>
        <TextInput
          style={styles.input}
          placeholder='0'
          placeholderTextColor={'black'}
        />
        </View>
        <View style={styles.form}>
        <Text style={styles.txt}>Prix maximum</Text>
        <TextInput
          style={styles.input}
          placeholder='1000'
          placeholderTextColor={'black'}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#fff'}}>Sauvegarder</Text>
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
  title: {
    fontSize: Dimensions.get('window').width * 0.1,
    color: Colors.primary,
  },
  parametersCard: {
    backgroundColor: Colors.tertiary,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.3,
    marginTop: Dimensions.get('window').height * 0.05,
    marginBottom: Dimensions.get('window').height * 0.025,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: Dimensions.get('window').width * 0.05
  },
  form: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '85%',
    height: '17%',
    borderRadius: 3,
  },
  txt: {
    width: '85%',
    marginBottom: Dimensions.get('window').height * 0.01,
    color: '#fff',
  },
  btn: {
    padding: Dimensions.get('window').width * 0.03,
    backgroundColor: Colors.primary,
    borderRadius: Dimensions.get('window').width * 0.015,
    marginTop: Dimensions.get('window').height * 0.05,
  }
});
