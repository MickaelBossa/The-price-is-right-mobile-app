// Librairies
import React from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import * as gameActions from '../store/actions/game';
import { useForm, Controller } from 'react-hook-form';

export default function Parameters() {
  // Variables
  const minimum = useSelector((state) => state.minimum);
  const maximum = useSelector((state) => state.maximum);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fonctions
  const onSubmitPressedHandler = (data) => {
    if (
      data.minimumInput < data.maximumInput &&
      data.minimumInput >= 0 &&
      data.maximumInput >= 0
    ) {
      dispatch(
        gameActions.updateVariables(data.minimumInput, data.maximumInput),
      );
      Alert.alert(
        'Sauvegarde effectuée',
        'Vos modifications ont été sauvegardées avec succès',
      );
      Keyboard.dismiss();
    } else {
      Alert.alert(
        'Une erreur est survenue',
        'Veuillez vérifier vos informations',
      );
    }
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <View style={styles.parametersCard}>
        <View style={styles.form}>
          <Text style={styles.txt}>Prix minimum</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.input}
                placeholder='0'
                keyboardType='numeric'
                value={value}
                onChangeText={(value) => onChange(value)}
              />
            )}
            name='minimumInput'
            defaultValue={minimum.toString()}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.txt}>Prix maximum</Text>
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.input}
                placeholder='1000'
                keyboardType='numeric'
                value={value}
                onChangeText={(value) => onChange(value)}
              />
            )}
            name='maximumInput'
            defaultValue={maximum.toString()}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={handleSubmit(onSubmitPressedHandler)}
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
