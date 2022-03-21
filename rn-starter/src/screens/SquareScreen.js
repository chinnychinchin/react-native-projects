import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const CHANGE = 15;

const SquareScreen = () => {

	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color,change) => {

		/* color === 'red', 'green', 'blue'
		change === CHANGE */

		switch(color) {

			case "red":
				red+change > 255 || red+change < 0 ? null: setRed(red+change)
				break;

			case "blue":
				blue+change > 255 || blue+change < 0 ? null: setBlue(blue+change)
				break;

			case "green":
				green+change > 255 || green+change <0 ? null: setGreen(green+change)
				break;

			default: 
				break;
		};
	};

	return (
		<View>
			<ColorCounter 
				onIncrease = {() => {setColor('red',CHANGE)}} 
				onDecrease = {() => {setColor('red',-1*CHANGE)}} 
				color = "Red" 
			/>
			<ColorCounter 
				color = "Green"
				onIncrease = {() => {setColor('green',CHANGE)}} 
				onDecrease = {() => {setColor('green',-1*CHANGE)}} 
			/>
			<ColorCounter 
				color = "Blue"
				onIncrease = {() => {setColor('blue',CHANGE)}} 
				onDecrease = {() => {setColor('blue',-1*CHANGE)}} 
			/>

			<View style = {{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}} />
		</View>
		);
};


const styles = StyleSheet.create({});

export default SquareScreen; 