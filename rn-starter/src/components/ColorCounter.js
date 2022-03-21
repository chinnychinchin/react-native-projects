import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {

	return (
		<View>
			<Text>{color}</Text>
			<Button title = {`Increase ${color}`} onPress={onIncrease}/>
			<Button title = {`Decrease ${color}`} onPress={onDecrease}/>

			{/*onDecrease and onIncrease should be called as props and not methods. 
				Hence, the parentheses () are not needed.*/}

		</View>
		);
};


const styles = StyleSheet.create({});

export default ColorCounter; 