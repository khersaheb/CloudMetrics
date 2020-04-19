/**
 * Rize tracks
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Button
} from 'reactstrap';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
// intl messages
import IntlMessages from 'Util/IntlMessages';
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';
import { RctCard } from 'Components/RctCard';
export default class Rizetracks extends Component {
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
			<div className="blank-wrapper">
				<RctCard>
					<div className="row no-gutters row-eq-height align-items-center pos-rel">
						<div className="col-sm-12">
							<div className="about-image">
								<img src={require('Assets/img/about-1.png')} alt="about gallery" className="img-fluid w-100" />
							</div>
							<div className="about-text">
							<div><img src={require('Assets/img/rarrow.png')} alt="Logo" className="arrow" /> <img src={require('Assets/img/download.png')} alt="Logo" className="width-auto" /></div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since. Lorem Ipsum has been the industrys standard dummy text ever since.</p>
							</div>
						</div>
					</div>
				</RctCard>
				<RctCollapsibleCard>
					<div className="row">
						<div className="col-sm-12 col-md-6 mb-30">
							<Card body >

								<Link className="pos-rel" component={Link} to="/app/rize-tracks/techcomputerscienceasliberalart" >
									<CardBody className="p-0">
										<CardTitle className="text-black h1 text-center">Computer Science & Technology</CardTitle>
										<div className="row mt-20">
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/siemens.png')} alt="Siemens" />
											</div>
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/dominos.png')} alt="Dominos" />
											</div>

										</div>
									</CardBody>

								</Link>
							</Card>
						</div>
						<div className="col-sm-12 col-md-6 mb-30">
							<Card body >
								<div className="box-layar">COMING SOON</div>
								<Link component={Link} to="/app/rize-tracks/techcomputerscienceasliberalart" >
									<CardBody className="p-0" >
										<CardTitle className="text-black h1 text-center">Computer Science & Technology</CardTitle>
										<div className="row mt-20">
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/siemens.png')} alt="Siemens" />
											</div>
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/dominos.png')} alt="Dominos" />
											</div>

										</div>
									</CardBody>
								</Link>
							</Card>
						</div>
						<div className="col-sm-12 col-md-6 mb-30">
							<Card body >
								<div className="box-layar">COMING SOON</div>
								<Link component={Link} to="/app/rize-tracks/techcomputerscienceasliberalart" >
									<CardBody className="p-0" >
										<CardTitle className="text-black h1 text-center">Computer Science & Technology</CardTitle>
										<div className="row mt-20">
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/siemens.png')} alt="Siemens" />
											</div>
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/dominos.png')} alt="Dominos" />
											</div>

										</div>
									</CardBody>
								</Link>
							</Card>
						</div>
						<div className="col-sm-12 col-md-6 mb-30">
							<Card body >
								<div className="box-layar">COMING SOON</div>
								<Link component={Link} to="/app/rize-tracks/techcomputerscienceasliberalart" >
									<CardBody className="p-0" >
										<CardTitle className="text-black h1 text-center">Computer Science & Technology</CardTitle>
										<div className="row mt-20">
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/siemens.png')} alt="Siemens" />
											</div>
											<div className="col-sm-6">
												<CardImg className="width-auto" src={require('Assets/img/dominos.png')} alt="Dominos" />
											</div>

										</div>
									</CardBody>
								</Link>
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
