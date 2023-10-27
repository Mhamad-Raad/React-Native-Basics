import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.playText}>Hello World!</Text>
      <TextInput placeholder='Your Course Goal' />
      <Button
        title='Tap Me!'
        color='#841584'
        onPress={() => {}}
        accessibilityLabel='Learn more about this purple button'
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16,
  },
});

