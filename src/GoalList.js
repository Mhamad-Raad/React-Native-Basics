import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';

const GoalList = ({ goalList, deleteButtonHandler }) => {
  return (
    <View style={styles.goalsConatiner}>
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <View style={styles.goalItem}>
            <Pressable
              onPress={() => deleteButtonHandler(itemData.item.id)}
              android_ripple={{ color: '#210644' }}
              style={({ pressed }) => pressed && styles.pressedItem}
            >
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
          </View>
        )}
        // you can also have a key attribute to simplify the process of key extraction
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsConatiner: {
    flex: 5,
    paddingTop: 50,
  },
  goalItem: {
    backgroundColor: '#5e0acc',
    margin: 8,
    borderRadius: 6,
  },
  goalText: {
    padding: 12,
    color: '#fff',
  },
  pressedItem: {
    opacity: 0.7,
  },
});

export default GoalList;
