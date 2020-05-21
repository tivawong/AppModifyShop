/**
 *	Fix1 container
 */

import React from 'react';
import BumperScreen from '../../screens/BumperScreen';

class BumperContainer extends React.Component {
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
			<BumperScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default BumperContainer;
