import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';
import firebaseSDK from '../config/firebaseSDK';


export default class Login extends React.Component {
	state = {
		name: 'Richard',
		email: 'test@live.com',
		password: '123456',
	};

	onPressLogin = async () => {
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		};

		const response = firebaseSDK.login(
			user,
			this.loginSuccess,
			this.loginFailed
		);
	};

	loginSuccess = () => {
		console.log('login successful, navigate to chat.');
		this.props.navigation.navigate('Chat', {
			name: this.state.name,
			email: this.state.email
		});
	};

	loginFailed = () => {
		alert('Login failure. Please tried again.');
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });

	render() {
		return (
			<View >
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeholder="test@live.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
                    onChangeText={this.onChangeTextPassword}
                    placeholder="123456"
					value={this.state.password}
				/>

				<TouchableHighlight
        			style={styles.button}
          			underlayColor="white"
					  onPress={this.onPressLogin}
        		>
          				<Text style={styles.buttonText}>Login</Text>
				 </TouchableHighlight>

				 <TouchableHighlight
        			style={styles.button}
          			underlayColor="white"
					onPress={() => this.props.navigation.navigate('Signup')}
        		>
          				<Text style={styles.buttonText}>Signup</Text>
				 </TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 16,
		marginLeft: 16,
		fontSize: 16
	},
	nameInput: {
		height: 16 * 2,
		margin: 16,
		paddingHorizontal: 16,
		borderColor: 'blue',
		borderWidth: 1,
		fontSize: 16
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