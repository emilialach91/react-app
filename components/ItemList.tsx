import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const ItemList = (props: any) => {
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={props.func(props.id)} onPressIn={props.onDelete.bind(this, props.id)}>
			<View style={styles.listItems} >
				<Text>{props.title}</Text>
			</View >
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	listItems: {
		padding: 10,
		backgroundColor: '#ccc',
		borderWidth: 1,
		marginVertical: 10,
	}
});
export default ItemList;