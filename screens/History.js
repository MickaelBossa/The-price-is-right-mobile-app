// Librairies
import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';

export default function History() {
  // Variable
  const scores = useSelector((state) => state.scores);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique</Text>
      {!scores[0] ? (
        <Text style={styles.information}>
          Faites au moins une partie pour avoir accès à votre historique
        </Text>
      ) : (
        <FlatList data={scores} keyExtractor={item => Math.random().toString} renderItem={item => (
          <View style={styles.scoreBoard}> 
            <Text styles={styles.scoresText}>Etapes : <Text style={styles.scoreSteps}>{item.item.steps}</Text></Text>
            <Text style={styles.player}>{item.item.player}</Text>
          </View>
        )} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Dimensions.get('window').width * 0.05,
    marginTop: Dimensions.get('window').width * 0.05,
  },
  title: {
    fontSize: Dimensions.get('window').width * 0.1,
    color: Colors.primary,
  },
  information: {
    textAlign: 'center',
    marginTop: Dimensions.get('window').width * 0.05,
  },
  scoreBoard: {
    width: Dimensions.get('window').width * 0.85,
    backgroundColor: Colors.quaternary,
    padding: Dimensions.get('window').width * 0.05,
    marginTop: Dimensions.get('window').width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoresText: {
    fontWeight: 'bold',
  },
  scoreSteps: {
    color: Colors.primary,
    fontWeight: 'normal',
  },
  player: {
    color: Colors.secondary,
  },
});
