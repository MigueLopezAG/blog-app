import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddEntryScreen from '../screens/AddEntryScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Agregar Entrada" component={AddEntryScreen} />
          <Stack.Screen name="Detalle" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}