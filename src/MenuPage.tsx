import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

export const MenuPage = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Je suis le menu</Text>
      <Button title="Go to Menu 1" onPress={() => navigate('Menu1')} />
      <Button title="Go to Menu 2" onPress={() => navigate('Menu2')} />
      <Text style={styles.text}>Je suis en bas</Text>
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
