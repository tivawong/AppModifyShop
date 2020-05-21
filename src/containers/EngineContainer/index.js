/**
 *	Fix1 container
 */

import React from 'react';
import EngineScreen from '../../screens/EngineScreen';

class EngineContainer extends React.Component {
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
			<EngineScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default EngineContainer;
