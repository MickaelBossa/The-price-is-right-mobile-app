// Librairies
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';

export default function Parameters() {
  // States
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('1000');
  const [errorInput, setErrorInput] = useState(false)

  // Fonctions
  const checkValidity = (e, input) => {
    
    // Vérifier que les valeurs sont corrects
    if(isNaN(e)) {
      setErrorInput(true)
    } else {
      setErrorInput(false);
      setMinPrice(e)
    }
  };

  const onSubmitPressedHandler = () => {
    // Fermer le clavier
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <View style={styles.parametersCard}>
        <View style={styles.form}>
          <Text style={styles.txt}>Prix minimum</Text>
          <TextInput
            style={errorInput ? styles.errorInput : styles.input}
            placeholder={minPrice}
            placeholderTextColor={'black'}
            onChangeText={(e, input) => checkValidity(e, setMinPrice)}
            value={minPrice}
            keyboardType='number-pad'
          />
          <Text style={styles.errorMsg}>
            {errorInput ? "Ceci n'est pas un nombre" : ''}
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.txt}>Prix maximum</Text>
          <TextInput
            style={errorInput ? styles.errorInput : styles.input}
            placeholder={maxPrice}
            placeholderTextColor={'black'}
            onChangeText={checkValidity}
            value={maxPrice}
            keyboardType='number-pad'
          />
          <Text style={styles.errorMsg}>
            {errorInput ? "Ceci n'est pas un nombre" : ''}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={onSubmitPressedHandler}
      >
        <Text style={{ color: '#fff' }}>Sauvegarder</Text>
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
    borderRadius: Dimensions.get('window').width * 0.05,
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
  errorInput: {
    backgroundColor: '#fff',
    width: '85%',
    height: '17%',
    borderRadius: 3,
    backgroundColor: '#F45A5F',
  },
  errorMsg: {
    color: '#F45A5F',
    marginTop: 1,
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
  },
});
