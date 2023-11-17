import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import GoalInputs from './src/GoalInputs';
import GoalList from './src/GoalList';

export default function App() {
  const [inputGoal, setInputGoal] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [visible, setVisible] = useState(false);

  const addInputGoalHandler = (enteredText) => {
    setInputGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: inputGoal, id: Math.random().toString() },
    ]);
    setInputGoal('');
    toggleVisibleHandler();
  };

  const deleteButtonHandler = (id) => {
    setGoalList((currenGoalList) => {
      return currenGoalList.filter((item) => item.id !== id);
    });
  };

  const toggleVisibleHandler = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color='#5e0acc'
        onPress={toggleVisibleHandler}
      />
      <GoalInputs
        inputGoal={inputGoal}
        addInputGoalHandler={addInputGoalHandler}
        addGoalHandler={addGoalHandler}
        visible={visible}
        toggleVisibleHandler={toggleVisibleHandler}
      />
      <GoalList goalList={goalList} deleteButtonHandler={deleteButtonHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

