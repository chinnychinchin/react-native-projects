import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const CHANGE = 15;

const reducer = (state,action) => {

	//state === {red:number, green:number, blue:number}
	//action === {type: "change_red" || "change_green" || "change_blue", payload: CHANGE}

	switch (action.type) {

		case "change_red":
			return state.red+action.payload > 255 || state.red+action.payload < 0 ? state 
			: {...state, red: state.red + action.payload};

		case "change_green":
			return state.green+action.payload > 255 || state.green+action.payload < 0 ? state 
			: {...state, green: state.green + action.payload};

		case "change_blue":
			return state.blue+action.payload > 255 || state.blue+action.payload < 0 ? state 
			: {...state, blue: state.blue + action.payload};

		default: 
			return state;

	}


}

const SquareScreenUseReducer = () => {

	const [state,dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
	const {red, green, blue} = state;

	return (
		<View>
			<ColorCounter 
				onIncrease = {() => dispatch({type:"change_red", payload:CHANGE})} 
				onDecrease = {() => dispatch({type:"change_red", payload:-1*CHANGE})} 
				color = "Red" 
			/>
			<ColorCounter 
				color = "Green"
				onIncrease = {() => dispatch({type:"change_green", payload:CHANGE})} 
				onDecrease = {() => dispatch({type:"change_green", payload:-1*CHANGE})} 
			/>
			<ColorCounter 
				color = "Blue"
				onIncrease = {() => dispatch({type:"change_blue", payload:CHANGE})} 
				onDecrease = {() => dispatch({type:"change_blue", payload:-1*CHANGE})} 
			/>

			<View style = {{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}} />
		</View>
		);
};


const styles = StyleSheet.create({});

export default SquareScreenUseReducer; 