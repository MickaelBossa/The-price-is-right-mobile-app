// Librairies
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Composants
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
