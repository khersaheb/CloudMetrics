/**
 * Tech & Computer Science as Liberalart
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Clientslider from './components/client-slider';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard'; 
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';
export default class Rizetrackdetail extends Component {
	render() {
		return (
			<div className="blank-wrapper">
				<Helmet>
					<title>Tech & Computer Science as Liberalart</title>
					<meta name="description" content="Tech & Computer Science as Liberalart" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.techcomputerscienceasliberalart" />} match={this.props.match} />
				<RctCollapsibleCard heading="Marketing Pitch">
					<Clientslider />
				</RctCollapsibleCard>
			</div>
		);
	}
}
