import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

const GoalList = ({goalList}) => {
  return (
    <View style={styles.goalsConatiner}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}
          // you can also have a key attribute to simplify the process of key extraction
          keyExtractor={(item) => item.id}
        />
      </View>
  )
}

const styles = StyleSheet.create({
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

export default GoalList;
