import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageDeRecherche from './PageDeRecherche';
import {
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

const Pile = createStackNavigator();
function MaPile() {
  return (
    <Pile.Navigator>
      <Pile.Screen name="Accueil" component={PageDeRecherche} />
    </Pile.Navigator>
  );
}
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MaPile />
      </NavigationContainer>
    );
  }
}

