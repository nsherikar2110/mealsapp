import react from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { StatusBar,StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen=()=>{
    return(
    <SafeAreaView style={{flex:1,marginTop:(Platform.OS==='android')?StatusBar.currentHeight:0}}>
      <View style={{backgroundColor:"pink",padding:10}}>
      <Searchbar
      placeholder="Search"

    />
      </View>
      <View style={{flex:1,backgroundColor:"skyblue",padding:8}}><RestaurantInfo></RestaurantInfo></View>
    </SafeAreaView>
    )
}