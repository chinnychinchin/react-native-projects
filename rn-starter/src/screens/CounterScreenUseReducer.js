import React, {useReducer} from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const CHANGE = 1;

const reducer = (state,action) => {

	//state === {count: number}
	//action === {type: "increase_num" || "decrease_num", payload: CHANGE }
	switch (action.type) {

		case "increase_num": 
			return state.count >= 10 ? state : {...state, count: state.count + action.payload}; 

		case "decrease_num": 
			return state.count <= - 10 ? state : {...state, count: state.count + action.payload}; 
	};

};

const CounterScreenUseReducer = () => {

	const [state,dispatch] = useReducer(reducer, {count:0});
	const {count} = state;

	return (
		<View>
			<Button 
			title="Increase"
			onPress={() => dispatch({type:"increase_num", payload: CHANGE})}
			/>

			<Button title="Decrease"
			onPress={() => dispatch({type:"decrease_num", payload: -1*CHANGE})}
			/> 

			<Text>Count: {count}</Text>
		</View>

		);
};

const styles = StyleSheet.create({});

export default CounterScreenUseReducer;