// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {

	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 0,
		shadowColor: '#111',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 10,
		elevation: 3,
		position: 'relative'

	},

	textStyle: {
		fontSize: 50 
	}
};


// Make a component available for other parts of the app 
export default Header;

