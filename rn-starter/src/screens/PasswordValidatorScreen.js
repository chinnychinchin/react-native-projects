import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

const PasswordValScreen = () => {

	const [password,setPassword] = useState('');

	return (

		<View>
			<Text>Enter password for validation:</Text>
			<TextInput 

				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={newPass => setPassword(newPass)}


			/> 
			{password.length <= 5 ? <Text>Password must be longer than 5 characters.</Text> : <Text>Password is strong.</Text> }
		</View>

		)
};

const styles = StyleSheet.create({


	input: {margin: 15, borderColor:"black", borderWidth: 1}
})

export default PasswordValScreen;