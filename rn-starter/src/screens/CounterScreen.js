import React, {useState} from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const CounterScreen = () => {

	const [count, setCount] = useState(0);

	return (
		<View>
			<Button 
			title="Increase"
			onPress={() => {setCount(count+1)}}
			/>

			<Button title="Decrease"
			onPress={() => {setCount(count-1)}}
			/> 

			<Text>Count: {count}</Text>
		</View>

		);
};

const styles = StyleSheet.create({});

export default CounterScreen;