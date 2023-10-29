import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputGoal, setInputGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const addInputGoalHandler = (enteredText) => {
    setInputGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoalList) => [...currentGoalList, inputGoal]);
    setInputGoal('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your Course Goal'
          onChangeText={addInputGoalHandler}
        />
        <Button
          title='Add Goal'
          color='#841584'
          onPress={addGoalHandler}
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
      <View style={styles.goalsConatiner}>
        <Text>List of goals!</Text>
        {goalList.map((goal, index) => (
          <View style={styles.goalItem} key={index}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsConatiner: {
    flex: 5,
    paddingTop: 50,
  },
  goalItem: {
    backgroundColor: '#5e0acc',
    margin: 8,
    padding: 12,
    borderRadius: 6,
  },
  goalText: {
    color: '#fff',
  },
});

