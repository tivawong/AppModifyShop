/**
 *	Fix1 container
 */

import React from 'react';
import ShockBrakeScreen from '../../screens/ShockBrakeScreen';

class ShockBrakeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: "javascript",
		};
	}
	_setState = (obj) => {
		this.setState(obj)
	}
	render() {
		return (
			<ShockBrakeScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default ShockBrakeContainer;
