import React, { useState } from 'react';
import { Button, FlatList, Modal, Pressable, StyleSheet, View, Text } from 'react-native';
import ItemList from './components/ItemList'
import UserInput from './components/UserInput'


export default function App() {

	const [enteredNewText, setNewText] = useState<any[]>([])
	const [isAddMode, setIsAddMode] = useState<boolean>(false)
	const [modalVisible, setModalVisible] = useState(false);
	const [itemDeleted, setItemDeleted] = useState<any>();

	const addNewText = (title: string) => {
		setNewText(currentContent => [...currentContent, { id: Math.random().toString(), value: title }]);
		setIsAddMode(false);
	};

	const removeItem = (textId: string) => {
		setNewText(currentContent => {
			return currentContent.filter((text) => text.id != textId)
		});
	}

	const showAlert = () => {
		setModalVisible(true)

	};

	const cancelHandler = () => {
		setIsAddMode(false);
	};

	const pull_data = (data: any) => {
		console.log('dupa', data);
	}

	return (
		<View style={styles.container}>
			<Button title={'ADD NEW TEXT'} onPress={() => setIsAddMode(true)} />

			<UserInput visible={isAddMode} addText={addNewText} onCancel={cancelHandler} />
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={enteredNewText}
				renderItem={itemData => (
					<ItemList title={itemData.item.value} onDelete={showAlert} id={itemData.item.id} func={pull_data} />
				)} />

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Are you sure you want to remove this item?</Text>
						<View style={styles.buttonsContainer}>
							<Pressable
								style={styles.button}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Cancel</Text>
							</Pressable>
							<Pressable
								style={styles.button}
								onPress={() => removeItem(itemDeleted)}
							>
								<Text style={styles.textStyle}>Yes</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 50,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	buttonsContainer: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		width: '30%',
		padding: 10,
		elevation: 2,
		backgroundColor: "#2196F3",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
});

