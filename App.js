import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { StatusBar,StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';

export default function App() {
  console.log(StatusBar.currentHeight)
  return (
    <>
    <RestaurantsScreen></RestaurantsScreen>
    <ExpoStatusBar style="auto"/>
    </>
  );
}


