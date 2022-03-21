import React from "react";
import {View, Text, StyleSheet} from "react-native";

const BoxScreen = () => {

	return (
	<View style={styles.viewStyle}>
		<Text style={styles.textOneStyle}>Child 10000000</Text>
		<Text style={styles.textTwoStyle}>Child 2</Text>
		<Text style={styles.textThreeStyle}>Child 3</Text>
	</View>

	)
};


const styles = StyleSheet.create({

 /* Method 1

	viewStyle: {borderWidth: 3, borderColor: "black", alignItems: "stretch", height: 500, flexDirection: "row", justifyContent: "space-between" },

	textOneStyle: {borderWidth: 3, borderColor: "red", height: 100, width: 100},

	textTwoStyle: {borderWidth: 3, borderColor: "red", height: 100, width: 100, top: 100},

	textThreeStyle: {borderWidth: 3, borderColor: "red", height: 100, width: 100}
*/

// Method 2 

	viewStyle: {borderWidth: 3, borderColor: "black", alignItems: "stretch", height: 500 },

	textOneStyle: {borderWidth: 3, borderColor: "red", height: 100, width: 100},

	textTwoStyle: {borderWidth: 3, borderColor: "red", height: 100, width: 100, alignSelf: "center"},

	textThreeStyle: {borderWidth: 3, borderColor: "red", height: 100, width: 100, position: "absolute", alignSelf: "flex-end"}

});


export default BoxScreen;