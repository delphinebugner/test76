import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

export const MenuPage = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am the menu</Text>
      <Button title="Go back" onPress={() => goBack()} />
      <Text style={styles.text}>I am the bottom</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    fontSize: 20,
    backgroundColor: 'red',
  },
});
