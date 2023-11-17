import { useState } from 'react';
import { Button, StyleSheet, View, StatusBar } from 'react-native';

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
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Button
            title='Add New Goal'
            color='#a065ec'
            onPress={toggleVisibleHandler}
          />
        </View>
        <GoalInputs
          inputGoal={inputGoal}
          addInputGoalHandler={addInputGoalHandler}
          addGoalHandler={addGoalHandler}
          visible={visible}
          toggleVisibleHandler={toggleVisibleHandler}
        />
        <GoalList
          goalList={goalList}
          deleteButtonHandler={deleteButtonHandler}
        />
      </View>
    </>
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

