import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

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
    setInputGoal('');
  };

  const deleteButtonHandler = (id) => {
    setGoalList((currenGoalList) => {
      return currenGoalList.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInputs
        inputGoal={inputGoal}
        addInputGoalHandler={addInputGoalHandler}
        addGoalHandler={addGoalHandler}
      />
      <GoalList goalList={goalList} deleteButtonHandler={deleteButtonHandler} />
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

