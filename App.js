import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
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
      <GoalInputs
        addInputGoalHandler={addInputGoalHandler}
        addGoalHandler={addGoalHandler}
      />
      <GoalList goalList={goalList} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});

