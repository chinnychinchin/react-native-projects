import React from "react";
import {View, StyleSheet, Text, FlatList} from "react-native";

const ListScreen = () => {


	const friends = [
	{name: "Howard", age: 56},
	{name: "John", age: 61},
	{name: "Mary", age: 9},
	{name: "Tina", age: 10},
	{name: "Joseph", age: 26},
	];

	return (<FlatList 
		keyExtractor={friend => String(friends.findIndex(i => i.name === friend.name))}
		data={friends} 
		renderItem={({item}) => { return <Text style={styles.textStyle}>{`${item.name} - age ${item.age}`}</Text> } }

		// element === {item: {name: "Howard", age: 56}, index: 0 }. 

		/>) 
};


const styles = StyleSheet.create({
	textStyle: { marginVertical: 50}
});


export default ListScreen;