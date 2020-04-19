/**
 * Tech & Computer Science as Liberalart
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet"; import {
	Card,
	CardImg,
	CardBody,
	CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

// components
import PricingBlockV1 from 'Components/Pricing/PricingBlockV1';

export default class Rizetrackdetail extends Component {
	state = {
		loading: false, // loading activity
	}
	onReload() {
		this.setState({ loading: true });
		let self = this;
		setTimeout(() => {
			self.setState({ loading: false });
		}, 2000);
	}
	render() {
		const { loading } = this.state;
		return (
			<div className="pricing-wrapper">
				<Helmet>
					<title>Computer Science & Technology</title>
					<meta name="description" content="Tech & Computer Science as Liberalart" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.computersciencetechnology" />} match={this.props.match} />
				<RctCollapsibleCard >
					<p className="text-center mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					{loading &&
						<RctSectionLoader />
					}
				</RctCollapsibleCard>
				<RctCollapsibleCard>
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-8 mb-10 mb-lg-0">
							<Card body >
								<CardBody className="p-0">
									<Button component={Link} to="/" variant="contained" className="d-block btn-primary text-white text-center  mb-md-20 mb-10">Curriculum Creator </Button>
									<div className="row">
										<div className="col-sm-12 col-md-6 mb-md-20 mb-10">
											<CardImg className="width-auto mrg-auto" src={require('Assets/img/user.png')} alt="User Img" />
										</div>
										<div className="col-sm-12 col-md-6 mb-10 mb-md-0">
											<CardImg className="width-auto mrg-auto" src={require('Assets/img/university.png')} alt="University img" />
										</div>
										<div className="col-sm-12">
											<p className="text-center mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-4  mb-20 mb-lg-0">
							<Card body >
								<CardBody className="p-0">
									<Button component={Link} to="/" variant="contained" className="d-block btn-primary text-white text-center  mb-md-20 mb-10">Endorsed by</Button>
									<div className="row">
										<div className="col-sm-12 mb-md-20 mb-10 ">
											<CardImg className="width-auto mrg-auto" src={require('Assets/img/siemens.png')} alt="Siemens" />
										</div>
										<div className="col-sm-12">
											<CardImg className="width-auto mrg-auto" src={require('Assets/img/dominos.png')} alt="Dominos" />
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className="col-sm-12 mb-0 mt-20 mb-lg-0">
							<Card body >
								<CardBody className="p-0">
									<Button component={Link} to="/" variant="contained" className="d-block btn-primary text-white text-center  mb-20">Courses</Button>
									<div className="row ">
										<div className="col-sm-12 mb-10">
											<div className="row flex-align-top">
												<div className="col-sm-12 col-md-5 courses mb-10 mb-md-0">
													<span className="mr-10 mr-lg-20">1</span>
													<h2>Intro To Programming</h2>
												</div>
												<div className="col-sm-12 col-md-7 mb-10">
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</div>
												
											</div>
										</div>
										<div className="col-sm-12">
											<div className="row flex-align-top"> 
												<div className="col-sm-12 col-md-5 courses mb-10 mb-md-0">
													<span className="mr-10 mr-lg-20">2</span>
													<h2>Intro To Data Mining</h2>
												</div>
												<div className="col-sm-12 col-md-7 mb-10">
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												</div>
												
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
					{loading &&
						<RctSectionLoader />
					}
				</RctCollapsibleCard>
			</div>
		);
	}
}
