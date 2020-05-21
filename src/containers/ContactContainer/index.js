/**
 *	Fix1 container
 */

import React from 'react';
import ContactScreen from '../../screens/ContactScreen';

class ContactsContainer extends React.Component {
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
			<ContactScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default ContactsContainer;
