import React, {useState} from "react";
import {View,Button,Text,StyleSheet,FlatList} from "react-native";

const ColorScreen = () => {

	const [colors,setColors] = useState([]);

	return (
		<View>
		<Button title="Add color" onPress={() => setColors([...colors,rgbGenerator()])}/>
		<FlatList 
			data = {colors}
			renderItem = {({item})=> {return (

				<View style={{height:100, width: 100, backgroundColor:item}} />

				)}}
			keyExtractor={item=> item}
		/>
		</View>
		);
};


const rgbGenerator = () => {
	let red = Math.floor(Math.random()*256);
	let green = Math.floor(Math.random()*256);
	let blue = Math.floor(Math.random()*256);

	return (`rgb(${red},${green},${blue})`);


};


const styles = StyleSheet.create({});

export default ColorScreen;