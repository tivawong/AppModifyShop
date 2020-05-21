/**
 *	Fix1 container
 */

import React from 'react';
import TireScreen from '../../screens/TireScreen';

class TireContainer extends React.Component {
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
			<TireScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default TireContainer;
