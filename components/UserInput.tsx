import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Modal } from 'react-native';

const UserInput = (props: any) => {
	const [enteredText, setEnteredText] = useState<string>('');

	const inputHandler = (enteredText: string) => {
		setEnteredText(enteredText);
	};

	const clearAddedInput = () => {
		props.addText(enteredText);
		setEnteredText('')

	}

	const clearCancelledInput = () => {
		props.onCancel()
		setEnteredText('')
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Add something'
					style={styles.input}
					onChangeText={inputHandler}
					value={enteredText}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={clearCancelledInput} />
					</View>
					<View style={styles.button}>
						<Button title="Add" onPress={clearAddedInput} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30
	},
	input: {
		width: '80%',
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,
		marginBottom: 20
	},

	buttonsContainer: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		width: '90px',
	}

});
export default UserInput;