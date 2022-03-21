import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = props => {
  return (
  	<View>
  		<Text style={styles.text}>Welcome to my cool App!</Text>
  		<Button title="Go to Components demo" onPress = {() => props.navigation.navigate('Components')}/>
  		<Button title="Go to List demo" onPress = {() => props.navigation.navigate('List')}/>
  		<Button title="Go to ImageScreen" onPress = {() => props.navigation.navigate('Images')}/>
  		<Button	title="Go to CounterScreen" onPress={() => props.navigation.navigate("Counter")}/>
  		<Button title="Go to CounterScreenUseReducer" onPress={() => {props.navigation.navigate("CounterUseReducer")}}/> 
  		<Button title="Go to ColorScreen" onPress={() => {props.navigation.navigate("Colors")}}/>
  		<Button title="Go to SquareScreen" onPress={() => {props.navigation.navigate("Square")}}/>
  		<Button title="Go to SquareScreenUseReducer" onPress={() => {props.navigation.navigate("SquareUseReducer")}}/>
  		<Button title="Go to PasswordValidator" onPress={() => props.navigation.navigate("PasswordVal")}/>
  		<Button title="Go to BoxScreen" onPress={() => props.navigation.navigate("Box")}/>
  	</View>

  	)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
