import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntoPage from './src/components/IntoPage';
import SecondScreen from './src/components/SecondScreen'; // Import SecondScreen component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IntoPage" component={IntoPage} 
        options={{ headerShown: false }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
