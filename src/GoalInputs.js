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
        <Image
          source={require('../assets/images/meme.jpg')}
          style={styles.imageStyle}
        />
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
              color='#5e0acc'
              onPress={addGoalHandler}
              accessibilityLabel='Learn more about this purple button'
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title='Cancel'
              color='#f31282'
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
    marginBottom: 10,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    borderRadius: 6,
    padding: 12,
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
  imageStyle: {
    marginBottom: 25,
  },
});

export default GoalInputs;
