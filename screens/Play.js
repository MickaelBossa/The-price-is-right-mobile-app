// Librairies
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import * as gameActions from '../store/actions/game';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Composants
import Logo from '../components/UI/Logo';

export default function Play() {
  // Variables
  const minimum = useSelector((state) => state.minimum);
  const maximum = useSelector((state) => state.maximum);
  const gameStarted = useSelector((state) => state.gameStarted);
  const dispatch = useDispatch();
  const solution = useSelector((state) => state.solution);

  // Fonctions
  const onStartPressedHandler = () => {
    dispatch(gameActions.startGame());
  };

  const onPropositionPressedHandler = () => {
    if (isNaN(proposition)) {
      Alert.alert('Attention', "Ceci n'est pas un nombre valide");
    } else {
      if (proposition == solution) {
        Alert.alert('Juste prix trouvé', `Vous avez reussi en ${steps} essais`);
        dispatch(gameActions.endGame(steps));
        setProposition();
        setIntruction();
        setSteps(1);
      } else if (proposition < solution) {
        setIntruction("C'est plus !");
        setSteps((prevSteps) => prevSteps + 1);
      } else {
        setIntruction("C'est moins !");
        setSteps((prevSteps) => prevSteps + 1);
      }
    }
  };

  // State
  const [steps, setSteps] = useState(1);
  const [proposition, setProposition] = useState();
  const [instruction, setIntruction] = useState();

  if (!gameStarted && steps != 1) {
    setIntruction();
    setSteps(1);
    setProposition();
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.txt}>
            Retrouvez le juste prix entre
            <Text style={{ color: Colors.secondary, fontWeight: 'bold' }}>
              {' '}
              {minimum}{' '}
            </Text>
            et
            <Text style={{ color: Colors.secondary, fontWeight: 'bold' }}>
              {' '}
              {maximum}{' '}
            </Text>
          </Text>
          {gameStarted ? (
            <>
              <View style={styles.instruction}>
                <Text style={styles.instructionSteps}>#{steps}</Text>
                <Text style={styles.instructionText}>
                  {instruction ? instruction : 'Quel est le juste prix ?'}
                </Text>
              </View>

              <View style={styles.proposition}>
                <TextInput
                  style={styles.input}
                  keyboardType='numeric'
                  value={proposition}
                  onChangeText={setProposition}
                  onFocus={() => setProposition()}
                  onSubmitEditing={onPropositionPressedHandler}
                />
                <TouchableOpacity
                  style={styles.send}
                  activeOpacity={0.8}
                  onPress={onPropositionPressedHandler}
                >
                  <Ionicons
                    name='arrow-forward'
                    color={Colors.secondary}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <TouchableOpacity
              style={styles.btn}
              onPress={onStartPressedHandler}
            >
              <Text style={{ color: '#fff' }}>Commencer</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
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
  instruction: {
    backgroundColor: Colors.tertiary,
    padding: Dimensions.get('window').width * 0.03,
    minWidth: Dimensions.get('window').width * 0.5,
    borderRadius: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  instructionText: {
    color: '#fff',
  },
  instructionSteps: {
    fontWeight: 'bold',
    color: '#fff',
    marginRight: Dimensions.get('window').width * 0.03,
  },
  proposition: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Dimensions.get('window').width * 0.03,
    backgroundColor: Colors.quaternary,
    borderRadius: Dimensions.get('window').width * 0.03,
    borderColor: Colors.primary,
    borderBottomWidth: 3,
    width: Dimensions.get('window').width * 0.4,
  },
  input: {
    padding: Dimensions.get('window').width * 0.02,
    width: Dimensions.get('window').width * 0.3,
  },
});
