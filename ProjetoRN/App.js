import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './src/views/Inicial/Inicial';
import Items from   './src/views/Items/Items';
import Alunos from './src/views/Alunos/Alunos';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>

      <StatusBar barStyle="light-content" backgroundColor="081a31"/>

      <Stack.Navigator>

          <Stack.Screen
           name="Inicio⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀TOP SÉRIES" 
           component={Inicial}
           
           
           options={
               { cardStyle: styles.screenInicial,
                 headerStyle: { backgroundColor: '#d01515' },
                 headerTintColor: '#FFFFFF',
                 
                 
               }
           } 
           />
           
          <Stack.Screen
           name="Items" 
           component={Items}
           options={
               { cardStyle: styles.screenItems,
                 headerStyle: { backgroundColor: '#FFFFFF' },
                 headerTintColor: '#080707',
               }
           } />
          <Stack.Screen 
          name="Alunos"  
          component={Alunos}
          options={
              { cardStyle: styles.screenAlunos,
                 headerStyle: { backgroundColor: '#FFFFFF' },
                 headerTintColor: '#080707',
               }
          } />

      </Stack.Navigator>

  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
    screenInicial: {
        backgroundColor: '#92afd7'
        
        
        
    },
    screenItems: {
        backgroundColor: '#d0f4ea'
    },
    screenAlunos: {
        backgroundColor: '#d1d1d1'
    },
});
