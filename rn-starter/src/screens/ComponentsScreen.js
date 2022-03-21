import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {

	const name = "David Lim Chin Yan";
	return <View>

<Text style={{fontSize: 45}}>Getting started with react native!</Text>
<Text style={{fontSize: 20}}>My name is {name}</Text>
</View>

}


/*
const styles = StyleSheet.create({
	textStyle1: {
		fontSize: 45,
	},
	textStyle2: {
		fontSize:20,
	}
})
*/

export default ComponentsScreen;
