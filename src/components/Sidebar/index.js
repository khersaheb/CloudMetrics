/**
 * Reactify Sidebar
 */
import React, { Component,Fragment } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';

// redux actions
import { collapsedSidebarAction } from 'Actions';

// components
import UserBlock from './UserBlock';
import SidebarContent from './SidebarContent';
import AgencySidebar from '../AgencyMenu/AgencySidebar';

class Sidebar extends Component {

	componentWillMount() {
		this.updateDimensions();
	}

	shouldComponentUpdate(nextProps) {
		const { enableSidebarBackgroundImage, selectedSidebarImage, isDarkSidenav, locale } = this.props;
		if (enableSidebarBackgroundImage !== nextProps.enableSidebarBackgroundImage || selectedSidebarImage !== nextProps.selectedSidebarImage || isDarkSidenav !== nextProps.isDarkSidenav || locale) {
			return true
		} else {
			return false
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	componentWillReceiveProps(nextProps) {
		const { windowWidth } = this.state;
		if (nextProps.location !== this.props.location) {
			if (windowWidth <= 1199) {
				this.props.collapsedSidebarAction(false);
			}
		}
	}

	updateDimensions = () => {
		this.setState({ windowWidth: $(window).width(), windowHeight: $(window).height() });
	}

	render() {
		const { enableSidebarBackgroundImage, selectedSidebarImage, isDarkSidenav, agencySidebar } = this.props;
		return (
			<Fragment>
				<div
					className="rct-sidebar"
				>
					<div className={classNames("rct-sidebar-content", { "sidebar-overlay-dark": isDarkSidenav, 'sidebar-overlay-light': !isDarkSidenav })}>
						<div className="site-logo">
							{/* <Link to="/" className="logo-mini">
								cm
							</Link> */}
							<Link to="/" className="logo-normal">
								<img src={require('Assets/img/cm_logo.png')} className="img-fluid" alt="site-logo" width="121" height="15" />
							</Link>
							<Link to="/" className="sidebar-link">
								<img src={require('Assets/img/sidebar-link.png')} className="img-fluid" alt="sidebar-link" />
							</Link>
						</div>
						<div className="rct-sidebar-wrap">
							<Scrollbars
								className="rct-scroll"
								autoHide
								autoHideDuration={100}
								style={{ height: 'calc(100vh - 60px)' }}
							>
								<UserBlock />
								{!agencySidebar ?
									<SidebarContent />
									:
									<AgencySidebar />
								}
							</Scrollbars>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

// map state to props
const mapStateToProps = ({ settings }) => {
	const { enableSidebarBackgroundImage, selectedSidebarImage, collapsedSidebar, isDarkSidenav, locale } = settings;
	return { enableSidebarBackgroundImage, selectedSidebarImage, collapsedSidebar, isDarkSidenav, locale };
};

export default withRouter(connect(mapStateToProps, {
	collapsedSidebarAction,
})(Sidebar));
