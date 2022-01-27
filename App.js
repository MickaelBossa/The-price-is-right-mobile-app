// Librairies
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import gameReducer from './store/reducers/game';

// Composants
import AppNavigator from './navigation/AppNavigator';

const store = createStore(gameReducer);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>

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
