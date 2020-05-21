/**
 *	Application splashscreen
 */

import React from 'react';
import { View, Text, Image } from 'react-native';

class Splash extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(() => {
			// if (firebase.auth().currentUser == null) {
			// 	this.props.navigation.navigate('Login')
			// }
			// else {
			// 	this.props.navigation.navigate('Notification')
			// }

			this.props.navigation.navigate('Home')

		}, 2000);
	}

	render() {
			return (
				<View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
					<Image
						source={require('./images/ReactNative.jpg')}
						style={{ width: '100%', height: '100%'}}
						resizeMode={'contain'}
					/>
				</View>
			)
	}
}

export default Splash;