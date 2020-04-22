import React from 'react';
import { ImagePicker, Permissions } from 'expo';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	TouchableHighlight
} from 'react-native';

import firebaseSDK from '../config/firebaseSDK';

export default class Signup extends React.Component {
	state = {
		name: 'Richard',
		email: 'test@live.com',
		password: '123456',
	};

	onPressCreate = async () => {
		try {
			const user = {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			};
			await firebaseSDK.createAccount(user);
		} catch ({ message }) {
			console.log('create account failed. catch error:' + message);
		}
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });
	onChangeTextName = name => this.setState({ name });


	render() {
		return (
			<View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeholder="Enter Email"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
                    onChangeText={this.onChangeTextPassword}
                    placeholder="Enter Password"
					value={this.state.password}
				/>
				<Text style={styles.title}>Name:</Text>
				<TextInput
					style={styles.nameInput}
                    onChangeText={this.onChangeTextName}
                    placeholder="Enter Email"
					value={this.state.name}
				/>

				<TouchableHighlight
        			style={styles.button}
          			underlayColor="white"
					onpress={this.onPressCreate}>
          			
				<Text style={styles.buttonText}>Signup</Text>
				 </TouchableHighlight>
			</View>
		);
	}
}

const offset = 16;
const styles = StyleSheet.create({
	title: {
		marginTop: offset,
		marginLeft: offset,
		fontSize: offset
	},
	nameInput: {
		height: offset * 2,
		margin: offset,
		paddingHorizontal: offset,
		borderColor: 'blue',
		borderWidth: 1,
		fontSize: offset
	},
	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center'
	},
	button: {
		justifyContent: 'center',
		alignSelf: "center",
		height: 35,
		width: 100,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 2,
		marginBottom: 10,
		marginTop: 10,

	
	  }
});