import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar,StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';
import React from 'react';
export default function App() {
  console.log(StatusBar.currentHeight)
  return (
    <>
    <SafeAreaView style={{flex:1,marginTop:(Platform.OS==='android')?StatusBar.currentHeight:0}}>
      <View style={{backgroundColor:"pink",padding:10}}>
        <Text>Hello</Text>
      </View>
      <View style={{flex:1,backgroundColor:"skyblue",padding:8}}><Text>aaa</Text></View>
    </SafeAreaView>
    <ExpoStatusBar style="auto"/>
    </>
  );
}


