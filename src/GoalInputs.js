import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from 'react-native';

const GoalInputs = ({
  inputGoal,
  addInputGoalHandler,
  addGoalHandler,
  visible,
  toggleVisibleHandler,
}) => {
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/meme.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your Course Goal'
          onChangeText={addInputGoalHandler}
          value={inputGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button
              title='Add Goal'
              color='#841584'
              onPress={addGoalHandler}
              accessibilityLabel='Learn more about this purple button'
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title='Cancel'
              color='#841584'
              onPress={toggleVisibleHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    height: 36,
    width: 100,
    marginTop: 50,
    marginHorizontal: 8,
  },
});

export default GoalInputs;
