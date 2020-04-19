/**
 * Contact
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class Contact extends Component {
	render() {
		return (
			<div className="blank-wrapper">
				<Helmet>
					<title>Contact</title>
					<meta name="description" content="Contact" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.contact" />} match={this.props.match} />
			</div>
		);
	}
}
