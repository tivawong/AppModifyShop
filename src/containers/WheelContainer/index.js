/**
 *	Fix1 container
 */

import React from 'react';
import WheelScreen from '../../screens/WheelScreen';

class WheelContainer extends React.Component {
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
			<WheelScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default WheelContainer;
