import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HelloPage} from './src/HelloPage';
import {MenuPage} from './src/MenuPage';

const Stack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();

const MenuRooter = () => {
  return (
    <MenuStack.Navigator>
      <Stack.Screen
        name="Menu1"
        component={MenuPage}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Settings" component={MenuPage} />
    </MenuStack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hello" component={HelloPage} />
        <Stack.Screen
          name="MenuRooter"
          component={MenuRooter}
          options={{presentation: 'modal', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
