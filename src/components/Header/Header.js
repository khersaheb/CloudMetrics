/**
 * App Header
 */
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import screenfull from 'screenfull';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

// actions
import { collapsedSidebarAction } from 'Actions';

// helpers
import { getAppLayout } from "Helpers/helpers";

// components
import Notifications from './Notifications';
import ChatSidebar from './ChatSidebar';
import DashboardOverlay from '../DashboardOverlay/DashboardOverlay';
import LanguageProvider from './LanguageProvider';
import SearchForm from './SearchForm';
import QuickLinks from './QuickLinks';
import MobileSearchForm from './MobileSearchForm';
import Cart from './Cart';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class Header extends Component {

   state = {
      customizer: false,
      isMobileSearchFormVisible: false
   }

   // function to change the state of collapsed sidebar
   onToggleNavCollapsed = (event) => {
      const val = !this.props.navCollapsed;
      this.props.collapsedSidebarAction(val);
   }

   // open dashboard overlay
   openDashboardOverlay() {
      $('.dashboard-overlay').toggleClass('d-none');
      $('.dashboard-overlay').toggleClass('show');
      if ($('.dashboard-overlay').hasClass('show')) {
         $('body').css('overflow', 'hidden');
      } else {
         $('body').css('overflow', '');
      }
   }

   // close dashboard overlay
   closeDashboardOverlay() {
      $('.dashboard-overlay').removeClass('show');
      $('.dashboard-overlay').addClass('d-none');
      $('body').css('overflow', '');
   }

   // toggle screen full
   toggleScreenFull() {
      screenfull.toggle();
   }

   // mobile search form
   openMobileSearchForm() {
      this.setState({ isMobileSearchFormVisible: true });
   }
   /**
 * Toggle User Dropdown Menu
 */
   toggleUserDropdownMenu() {
      this.setState({ userDropdownMenu: !this.state.userDropdownMenu });
   }

   render() {
      const { isMobileSearchFormVisible } = this.state;
      $('body').click(function () {
         $('.dashboard-overlay').removeClass('show');
         $('.dashboard-overlay').addClass('d-none');
         $('body').css('overflow', '');
      });
      const { horizontalMenu, agencyMenu, location } = this.props;
      return (
         <AppBar position="static" className="rct-header">
            <Toolbar className="d-flex justify-content-between w-100 pl-0">
               <div className="d-flex align-items-center">
                  {(horizontalMenu || agencyMenu) &&
                     <div className="site-logo">
                        <Link to="/" className="logo-mini">
                           <img src={require('Assets/img/appLogo.png')} className="mr-15" alt="site logo" width="35" height="35" />
                        </Link>
                        <Link to="/" className="logo-normal">
                           <img src={require('Assets/img/appLogoText.png')} className="img-fluid" alt="site-logo" width="67" height="17" />
                        </Link>
                     </div>
                  }
                  {!agencyMenu &&
                     // <div className="list-inline mb-0 navbar-left hidden-md-down">
                     //    <div className="list-inline-item " onClick={(e) => this.onToggleNavCollapsed(e)}>
                     //       <Tooltip title="Sidebar Toggle" placement="bottom">
                     //          <IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0">
                     //             <MenuIcon />
                     //          </IconButton>
                     //       </Tooltip>
                     //    </div>
                     // </div>
                     <ul className="list-inline mb-0 navbar-left tab-box hidden-md-down">
                        <li className="list-inline-item">
                           <Link to="/" className="active">
                              Summary
                        </Link>
                        </li>
                        <li className="list-inline-item">
                           <Link to="/">
                              Analyze
                        </Link>
                        </li>
                        <li className="list-inline-item">
                           <Link to="/">
                              TBD
                        </Link>
                        </li>
                     </ul>
                  }
               </div>
               <ul className="navbar-right list-inline mb-0 d-flex align-items-center">

                  <li className="list-inline-item">
                     {/* <Tooltip title="Full Screen" placement="bottom">
                        <IconButton aria-label="settings" onClick={() => this.toggleScreenFull()}>
                           <i className="zmdi zmdi-crop-free"></i>
                        </IconButton>
                     </Tooltip> */}
                  </li>
                  <li className="list-inline-item search-icon d-inline-block mr-1">
                     {/* <SearchForm />
                     <IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
                        <i className="zmdi zmdi-search"></i>
                     </IconButton>
                     <MobileSearchForm
                        isOpen={isMobileSearchFormVisible}
                        onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                     /> */}

                     <Tooltip title="Search" placement="bottom">
                        <IconButton className="search-btn" aria-label="bell">
                           <i className="zmdi zmdi-search"></i>
                        </IconButton>
                     </Tooltip>
                  </li>
                  <Notifications />
                  <li className="user-block"><Dropdown
                     isOpen={this.state.userDropdownMenu}
                     toggle={() => this.toggleUserDropdownMenu()}
                     className="rct-dropdown"
                  >
                     <DropdownToggle
                        tag="div"
                        className="d-flex align-items-center"
                     >
                        <div className="user-profile">
                           <img
                              src={require('Assets/img/user-cm.png')}
                              alt="user profile"
                              className="img-fluid"
                              width="38"
                              height="38"
                           />
                        </div>
                        <div className="user-info">
                           <span className="user-name ml-3">Brooklyn Shelton</span>
                           <i className="zmdi zmdi-chevron-down dropdown-icon ml-3"></i>
                        </div>
                     </DropdownToggle>
                     <DropdownMenu>
                        <ul className="list-unstyled mb-0">
                           <li className="p-15 border-bottom user-profile-top bg-primary rounded-top">
                              <p className="text-white mb-0 fs-14">Brooklyn Shelton</p>
                              <span className="text-white fs-14">info@example.com</span>
                           </li>
                           <li>
                              <Link to={{
                                 pathname: '/app/users/user-profile-1',
                                 state: { activeTab: 0 }
                              }}>
                                 <i className="zmdi zmdi-account text-primary mr-3"></i>
                                 <IntlMessages id="widgets.profile" />
                              </Link>
                           </li>
                           <li className="border-top">
                              <a href="javascript:void(0)" onClick={() => this.logoutUser()}>
                                 <i className="zmdi zmdi-power text-danger mr-3"></i>
                                 <IntlMessages id="widgets.logOut" />
                              </a>
                           </li>
                        </ul>
                     </DropdownMenu>
                  </Dropdown></li>
               </ul>
               <Drawer
                  anchor={'right'}
                  open={this.state.customizer}
                  onClose={() => this.setState({ customizer: false })}
               >
                  <ChatSidebar />
               </Drawer>
            </Toolbar>
            <DashboardOverlay
               onClose={() => this.closeDashboardOverlay()}
            />
         </AppBar>
      );
   }
}

// map state to props
const mapStateToProps = ({ settings }) => {
   return settings;
};

export default withRouter(connect(mapStateToProps, {
   collapsedSidebarAction
})(Header));
