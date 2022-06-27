
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import ItemList from './components/ItemList'
import UserInput from './components/UserInput'


export default function App() {

	const [enteredNewText, setNewText] = useState<any[]>([])
	const [isAddMode, setIsAddMode] = useState<boolean>(false)

	const addNewText = (title: string) => {
		setNewText(currentContent => [...currentContent, { id: Math.random().toString(), value: title }]);
		setIsAddMode(false);
	};

	const removeText = (textId: string) => {
		setNewText(currentContent => {
			return currentContent.filter((text) => text.id != textId)
		});
	}

	const cancelHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.container}>
			<Button title={'ADD NEW TEXT'} onPress={() => setIsAddMode(true)} />

			<UserInput visible={isAddMode} addText={addNewText} onCancel={cancelHandler} />

			<FlatList
				keyExtractor={(item, index) => item.id}
				data={enteredNewText}
				renderItem={itemData => (
					<ItemList title={itemData.item.value} onDelete={removeText} id={itemData.item.id} />
				)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 50,
	},
});

