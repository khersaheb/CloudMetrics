/**
 * Insight Dashboard
 */

import React, { Component } from 'react';
// import CountUp from 'react-countup';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// intl messages
import IntlMessages from 'Util/IntlMessages';


// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// rct card box
import { RctCard, RctCardContent } from 'Components/RctCard';

// import {
// 	RecentOrdersWidget,
// 	SupportRequest,
// 	Notifications,
// 	TopSellingWidget,
// 	OverallTrafficStatusWidget,
// 	ProductReportsWidget,
// 	OnlineVisitorsWidget,
// 	TodayOrdersStatsWidget,
// 	BookingInfo,
// 	NewOrderCountdown,
// 	FollowersWidget,
// 	Notes
// } from "Components/Widgets";

function TabContainer({ children }) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	);
}
// widgets data
// import {
// 	topSellingProducts,
// 	trafficStatus,
// 	onlineVisitorsData,
// } from './data';
class InsightDashboard extends Component {
	state = {
		activeIndex: 0
	}

	handleChangeIndex(index) {
		this.setState({ activeIndex: index });
	}

	handleChange(event, value) {
		this.setState({ activeIndex: value });
	}
	/**
* Toggle User Dropdown Menu
*/
	toggleUserDropdownMenu1() {
		this.setState({ userDropdownMenu1: !this.state.userDropdownMenu1 });
	}
	toggleUserDropdownMenu2() {
		this.setState({ userDropdownMenu2: !this.state.userDropdownMenu2 });
	}
	toggleUserDropdownMenu3() {
		this.setState({ userDropdownMenu3: !this.state.userDropdownMenu3 });
	}
	toggleUserDropdownMenu4() {
		this.setState({ userDropdownMenu4: !this.state.userDropdownMenu4 });
	}

	render() {
		const { match } = this.props;
		return (
			<div className="ecom-dashboard-wrapper">
				<div className="insight-main">
					<AppBar className="insight-tab" position="static" color="default">
						<Tabs className="tabs-title"
							value={this.state.activeIndex}
							onChange={(e, value) => this.handleChange(e, value)}
						>
							<Tab label="Total Costs" />
							<Tab label="Compate" />
							<Tab label="Storage" />
							<Tab label="Database" />
							<Tab label="Network" />
							<Tab label="Config And Others" />
						</Tabs>
					</AppBar>
					<SwipeableViews className="insight-content"
						axis={'x'}
						index={this.state.activeIndex}
						onChangeIndex={(index) => this.handleChangeIndex(index)}>
						<TabContainer>
							<div className="dropdown-group">
								<div className="dropdow-item">
									<Dropdown
										isOpen={this.state.userDropdownMenu1}
										toggle={() => this.toggleUserDropdownMenu1()}
										className="rct-dropdown"
									>
										<DropdownToggle
											tag="div"
											className="d-flex align-items-center"
										>
											<div className="dropdown-info">
												<span className="dropdown-name">Dropdown 1</span>
												<img
													src={require('Assets/img/down-arrow.svg')}
													alt="down arrow"
													className="img-fluid ml-3"
													width="11"
													height="6"
												/>
											</div>
										</DropdownToggle>
										<DropdownMenu>
											<ul className="list-unstyled mb-0">
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 1
                              						</a>
												</li>
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 1
                             						</a>
												</li>
											</ul>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div className="dropdow-item">
									<Dropdown
										isOpen={this.state.userDropdownMenu2}
										toggle={() => this.toggleUserDropdownMenu2()}
										className="rct-dropdown"
									>
										<DropdownToggle
											tag="div"
											className="d-flex align-items-center"
										>
											<div className="dropdown-info">
												<span className="dropdown-name">Dropdown 2</span>
												<img
													src={require('Assets/img/down-arrow.svg')}
													alt="down arrow"
													className="img-fluid ml-3"
													width="11"
													height="6"
												/>
											</div>
										</DropdownToggle>
										<DropdownMenu>
											<ul className="list-unstyled mb-0">
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 2
                              						</a>
												</li>
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 2
                             						</a>
												</li>
											</ul>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div className="dropdow-item">
									<Dropdown
										isOpen={this.state.userDropdownMenu3}
										toggle={() => this.toggleUserDropdownMenu3()}
										className="rct-dropdown"
									>
										<DropdownToggle
											tag="div"
											className="d-flex align-items-center"
										>
											<div className="dropdown-info">
												<span className="dropdown-name">Dropdown 3</span>
												<img
													src={require('Assets/img/down-arrow.svg')}
													alt="down arrow"
													className="img-fluid"
													width="11"
													height="6"
												/>
											</div>
										</DropdownToggle>
										<DropdownMenu>
											<ul className="list-unstyled mb-0">
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 3
                              						</a>
												</li>
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 3
                             						</a>
												</li>
											</ul>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div className="dropdow-item">
									<Dropdown
										isOpen={this.state.userDropdownMenu4}
										toggle={() => this.toggleUserDropdownMenu4()}
										className="rct-dropdown"
									>
										<DropdownToggle
											tag="div"
											className="d-flex align-items-center"
										>
											<div className="dropdown-info">
												<span className="dropdown-name">Dropdown 4</span>
												<img
													src={require('Assets/img/down-arrow.svg')}
													alt="down arrow"
													className="img-fluid ml-3"
													width="11"
													height="6"
												/>
											</div>
										</DropdownToggle>
										<DropdownMenu>
											<ul className="list-unstyled mb-0">
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 4
                              						</a>
												</li>
												<li className="border-top">
													<a href="javascript:void(0)">
														Dropdown 4
                             						</a>
												</li>
											</ul>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
							<div className="row counter-main">
								<div className="col-sm-6 col-md-4 w-xs-half-block">
									<RctCard>
										<RctCardContent>
											<div className="clearfix">
												<div className="float-left">
													<div className="d-flex">
														<div className="mr-50">
															<span className="counter-title  d-block">New Total Spend</span>
															<span className="counter-point">29,639.165</span>
														</div>
													</div>
												</div>
												<div className="float-right hidden-md-down">
													<div className="featured-section-icon">
														<img src={require('Assets/img/doller.png')} alt="new total spend" width="46" height="46" />
													</div>
												</div>
											</div>
										</RctCardContent>
									</RctCard >
								</div>
								<div className="col-sm-6 col-md-4 w-xs-half-block">
									<RctCard>
										<RctCardContent>
											<div className="clearfix">
												<div className="float-left">
													<div className="d-flex">
														<div className="mr-50">
															<span className="counter-title d-block">New Total Products</span>
															<span className="counter-point">13</span>
														</div>
													</div>
												</div>
												<div className="float-right hidden-md-down">
													<div className="featured-section-icon">
														<img src={require('Assets/img/product.png')} alt="new total products" width="46" height="46" />
													</div>
												</div>
											</div>
										</RctCardContent>
									</RctCard >
								</div>

								<div className="col-sm-12 col-md-4 w-xs-half-block">
									<RctCard>
										<RctCardContent>
											<div className="clearfix">
												<div className="float-left">
													<div className="d-flex">
														<div className="mr-50">
															<span className="counter-title  d-block">New Total Resources</span>
															<span className="counter-point">21</span>
														</div>
													</div>
												</div>
												<div className="float-right hidden-md-down">
													<div className="featured-section-icon">
														<img src={require('Assets/img/resources.png')} alt="new total resources" width="46" height="46" />
													</div>
												</div>
											</div>
										</RctCardContent>
									</RctCard >
								</div>
							</div>
							<div className="row chat-group">
								<div className="col-sm-12 col-md-6 w-xs-half-block">
									<h3>New Total Products Costs Over Time</h3>
									<RctCard>
										<RctCardContent>
											<img className="w-100" src={require('Assets/img/chat1.jpg')} alt="new total products costs over time" />
										</RctCardContent>
									</RctCard >
								</div>
								<div className="col-sm-12 col-md-6 w-xs-half-block">
									<h3>New Total Costs By Product Family</h3>
									<RctCard>
										<RctCardContent>
											<img className="w-100" src={require('Assets/img/chat2.jpg')} alt="new total costs by product family" />
										</RctCardContent>
									</RctCard >
								</div>
							</div>

						</TabContainer>
						<TabContainer>Compate</TabContainer>
						<TabContainer>Storage</TabContainer>
						<TabContainer>Database</TabContainer>
						<TabContainer>Network</TabContainer>
						<TabContainer>Config And Others</TabContainer>
					</SwipeableViews>
				</div>

			</div>
		)
	}
}
export default InsightDashboard;