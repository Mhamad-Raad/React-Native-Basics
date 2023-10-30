import { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import GoalInputs from './src/GoalInputs';
import GoalList from './src/GoalList';

export default function App() {
  const [inputGoal, setInputGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const addInputGoalHandler = (enteredText) => {
    setInputGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: inputGoal, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInputs addInputGoalHandler={addInputGoalHandler} addGoalHandler={addGoalHandler} />
      <GoalList goalList={goalList}/>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

