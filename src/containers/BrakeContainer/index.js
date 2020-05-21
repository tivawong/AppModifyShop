/**
 *	Fix1 container
 */

import React from 'react';
import BrakeScreen from '../../screens/BrakeScreen';

class BrakeContainer extends React.Component {
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
			<BrakeScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default BrakeContainer;
