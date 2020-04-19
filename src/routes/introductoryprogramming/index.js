/**
 * Marketplace Detail
 */
import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
   Pagination,
   PaginationItem,
   PaginationLink,
   Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Badge
} from 'reactstrap';
import { NotificationManager } from 'react-notifications';
import Avatar from '@material-ui/core/Avatar';
// api
import api from 'Api';

// delete confirmation dialog
import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

// add new user form
import AddNewUserForm from './AddNewUserForm';

// update user form
import UpdateUserForm from './UpdateUserForm';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
   return <Slide direction="up" {...props} />;
}

export default class AsyncIntroductoryProgrammingComponent extends Component {

   state = {
      all: false,
      users: null, // initial user data
      selectedUser: null, // selected user to perform operations
      loading: false, // loading activity
      addNewUserModal: false, // add new user form modal
      addNewUserDetail: {
         id: '',
         name: '',
         birthday: '',
         studentid: '',
         studentscollege: '',
         emailAddress: '',
         classsname: '',
         myclassid: '',
         checked: false
      },
      openViewUserDialog: false, // view user dialog box
      editUser: null,
      allSelected: false,
      selectedUsers: 0,
      collapse: false,
      open: false,
   }

   handleClickOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };


   componentDidMount() {
      api.get('userManagement.js')
         .then((response) => {
            this.setState({ users: response.data });
         })
         .catch(error => {
            // error hanlding
         })
   }

	/**
	 * On Delete
	 */
   onDelete(data) {
      this.refs.deleteConfirmationDialog.open();
      this.setState({ selectedUser: data });
   }

	/**
	 * Delete User Permanently
	 */
   deleteUserPermanently() {
      const { selectedUser } = this.state;
      let users = this.state.users;
      let indexOfDeleteUser = users.indexOf(selectedUser);
      users.splice(indexOfDeleteUser, 1);
      this.refs.deleteConfirmationDialog.close();
      this.setState({ loading: true });
      let self = this;
      setTimeout(() => {
         self.setState({ loading: false, users, selectedUser: null });
         NotificationManager.success('User Deleted!');
      }, 2000);
   }

	/**
	 * Open Add New User Modal
	 */
   opnAddNewUserModal() {
      this.setState({ addNewUserModal: true });
   }

	/**
	 * On Reload
	 */
   onReload() {
      this.setState({ loading: true });
      let self = this;
      setTimeout(() => {
         self.setState({ loading: false });
      }, 2000);
   }

	/**
	 * On Select User
	 */
   onSelectUser(user) {
      user.checked = !user.checked;
      let selectedUsers = 0;
      let users = this.state.users.map(userData => {
         if (userData.checked) {
            selectedUsers++;
         }
         if (userData.id === user.id) {
            if (userData.checked) {
               selectedUsers++;
            }
            return user;
         } else {
            return userData;
         }
      });
      this.setState({ users, selectedUsers });
   }

	/**
	 * On Change Add New User Details
	 */
   onChangeAddNewUserDetails(key, value) {
      this.setState({
         addNewUserDetail: {
            ...this.state.addNewUserDetail,
            [key]: value
         }
      });
   }

	/**
	 * Add New User
	 */
   addNewUser() {
      const { name, emailAddress } = this.state.addNewUserDetail;
      if (name !== '' && emailAddress !== '') {
         let users = this.state.users;
         let newUser = {
            ...this.state.addNewUserDetail,
            id: new Date().getTime()
         }
         users.push(newUser);
         this.setState({ addNewUserModal: false, loading: true });
         let self = this;
         setTimeout(() => {
            self.setState({ loading: false, users });
            NotificationManager.success('User Created!');
         }, 2000);
      }
   }

	/**
	 * View User Detail Hanlder
	 */
   viewUserDetail(data) {
      this.setState({ openViewUserDialog: true, selectedUser: data });
   }

	/**
	 * On Edit User
	 */
   onEditUser(user) {
      this.setState({ addNewUserModal: true, editUser: user });
   }

	/**
	 * On Add & Update User Modal Close
	 */
   onAddUpdateUserModalClose() {
      this.setState({ addNewUserModal: false, editUser: null })
   }

	/**
	 * On Update User Details
	 */
   onUpdateUserDetails(key, value) {
      this.setState({
         editUser: {
            ...this.state.editUser,
            [key]: value
         }
      });
   }

	/**
	 * Update User
	 */
   updateUser() {
      const { editUser } = this.state;
      let indexOfUpdateUser = '';
      let users = this.state.users;
      for (let i = 0; i < users.length; i++) {
         const user = users[i];
         if (user.id === editUser.id) {
            indexOfUpdateUser = i
         }
      }
      users[indexOfUpdateUser] = editUser;
      this.setState({ loading: true, editUser: null, addNewUserModal: false });
      let self = this;
      setTimeout(() => {
         self.setState({ users, loading: false });
         NotificationManager.success('User Updated!');
      }, 2000);
   }

   //Select All user
   onSelectAllUser(e) {
      const { selectedUsers, users } = this.state;
      let selectAll = selectedUsers < users.length;
      if (selectAll) {
         let selectAllUsers = users.map(user => {
            user.checked = true
            return user
         });
         this.setState({ users: selectAllUsers, selectedUsers: selectAllUsers.length })
      } else {
         let unselectedUsers = users.map(user => {
            user.checked = false
            return user;
         });
         this.setState({ selectedUsers: 0, users: unselectedUsers });
      }
   }
   //On collapse project description
   OnCollapseProject() {
      this.setState({
         collapse: !this.state.collapse
      });
   }
   render() {
      const { users, loading, selectedUser, editUser, allSelected, selectedUsers } = this.state;
      const { collapse } = this.state;
      return (
         <div className="user-management">
            <Helmet>
               <title>Introductory Programming</title>
               <meta name="description" content="Marketplace" />
            </Helmet>
            <PageTitleBar
               title={<IntlMessages id="sidebar.introductoryprogramming" />}
               match={this.props.match}
            />
            <div class="d-flex justify-content-end mb-20">
               <Button variant="contained" onClick={this.handleClickOpen} className="btn-primary text-white">Register</Button>
            </div>
            <RctCollapsibleCard heading="Rize Track Detais" >
               <div className="row">
                  <div className="col-sm-12 col-md-6">
                     <span>Rize Track:<b> Computer Science</b></span>
                     <span>Subject(s):<b>Computer Science, Information Technology, Engineering..</b></span>
                     <span>Level: <b>Introductory</b></span>
                     <span>Endorsed by: <img src={require('Assets/avatars/user-2.jpg')} alt="" className="size-100 mt-2 align-top" /></span>
                  </div>
                  <div className="col-sm-12 col-md-6 text-md-right mt-15 mt-md-0">
                     <span><b>Bay Parth University (MA)</b></span>
                     <span><b>Dr. Jane Smith, PfD</b></span>
                     <span><b>Spring 2020</b></span>
                     <span><b>T, TH (9-10am)</b></span>
                     <span>Price: <b>$375</b></span>
                     <span>Grades Due: <b>05/01/2019</b></span>
                     <span>Adrian Class ID: <b>12345</b></span>
                  </div>
               </div>
            </RctCollapsibleCard>
            <RctCollapsibleCard heading="Syllabus">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </RctCollapsibleCard>
            <RctCollapsibleCard heading="Academic Calendar">
               <div className="row">
                  <div className="col-sm-12 col-md-4">
                     <Select value="Fall 2019">
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Fall 2019">Fall 2019</MenuItem>
                        <MenuItem value="Spring 2019">Spring 2019</MenuItem>
                        <MenuItem value="Winter 2019">Winter 2019</MenuItem>
                     </Select>
                  </div>
               </div>
            </RctCollapsibleCard>
            <RctCollapsibleCard heading="Available Classes" fullBlock>
               <div className="table-responsive">
                  <table className="table table-middle table-hover mb-0">
                     <thead>
                        <tr>
                           <th>College</th>
                           <th>State</th>
                           <th>Seats Available</th>
                           <th>Semester</th>
                           <th>Class Time</th>
                           <th>Cost per Seat</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td><span onClick={() => this.OnCollapseProject()}>Hope College</span></td>
                           <td>Mi</td>
                           <td>20/25</td>
                           <td>Spring 2020</td>
                           <td>T, Th (9-10am)</td>
                           <td>$500</td>
                        </tr>
                        {collapse &&
                           <tr>
                              <td colSpan="6" className="border-top-0">
                                 <Collapse isOpen={collapse}>
                                    <tr className="d-inline-table">
                                       <td className="border-top-0">3 Credits</td>
                                       <td className="border-top-0">Dr. Charles Severance,PhD</td>
                                       <td className="border-top-0">Grades Due:05/01/2020</td>
                                       <td className="border-top-0"><Button component={Link} to="/" variant="contained" className="btn-primary text-white text-center">See Course </Button></td>
                                    </tr>
                                 </Collapse>
                              </td>
                           </tr>
                        }
                        <tr>
                           <td><span onClick={() => this.OnCollapseProject()}>Hope College</span></td>
                           <td>Mi</td>
                           <td>20/25</td>
                           <td>Spring 2020</td>
                           <td>T, Th (9-10am)</td>
                           <td>$500</td>
                        </tr>
                        {collapse &&
                           <tr>
                              <td colSpan="6" className="border-top-0">
                                 <Collapse isOpen={collapse}>
                                    <tr className="d-inline-table">
                                       <td className="border-top-0">3 Credits</td>
                                       <td className="border-top-0">Dr. Charles Severance,PhD</td>
                                       <td className="border-top-0">Grades Due:05/01/2020</td>
                                       <td className="border-top-0"><Button component={Link} to="/" variant="contained" className="btn-primary text-white text-center">See Course </Button></td>
                                    </tr>
                                 </Collapse>
                              </td>
                           </tr>
                        }
                        <tr>
                           <td><span onClick={() => this.OnCollapseProject()}>Hope College</span></td>
                           <td>Mi</td>
                           <td>20/25</td>
                           <td>Spring 2020</td>
                           <td>T, Th (9-10am)</td>
                           <td>$500</td>
                        </tr>
                        {collapse &&
                           <tr>
                              <td colSpan="6" className="border-top-0">
                                 <Collapse isOpen={collapse}>
                                    <tr className="d-inline-table">
                                       <td className="border-top-0">3 Credits</td>
                                       <td className="border-top-0">Dr. Charles Severance,PhD</td>
                                       <td className="border-top-0">Grades Due:05/01/2020</td>
                                       <td className="border-top-0"><Button component={Link} to="/" variant="contained" className="btn-primary text-white text-center">See Course </Button></td>
                                    </tr>
                                 </Collapse>
                              </td>
                           </tr>
                        }
                        <tr>
                           <td><span onClick={() => this.OnCollapseProject()}>Hope College</span></td>
                           <td>Mi</td>
                           <td>20/25</td>
                           <td>Spring 2020</td>
                           <td>T, Th (9-10am)</td>
                           <td>$500</td>
                        </tr>
                        {collapse &&
                           <tr>
                              <td colSpan="6" className="border-top-0">
                                 <Collapse isOpen={collapse}>
                                    <tr className="d-inline-table">
                                       <td className="border-top-0">3 Credits</td>
                                       <td className="border-top-0">Dr. Charles Severance,PhD</td>
                                       <td className="border-top-0">Grades Due:05/01/2020</td>
                                       <td className="border-top-0"><Button component={Link} to="/" variant="contained" className="btn-primary text-white text-center">See Course </Button></td>
                                    </tr>
                                 </Collapse>
                              </td>
                           </tr>
                        }
                        <tr>
                           <td><span onClick={() => this.OnCollapseProject()}>Hope College</span></td>
                           <td>Mi</td>
                           <td>20/25</td>
                           <td>Spring 2020</td>
                           <td>T, Th (9-10am)</td>
                           <td>$500</td>
                        </tr>
                        {collapse &&
                           <tr>
                              <td colSpan="6" className="border-top-0">
                                 <Collapse isOpen={collapse}>
                                    <tr className="d-inline-table">
                                       <td className="border-top-0">3 Credits</td>
                                       <td className="border-top-0">Dr. Charles Severance,PhD</td>
                                       <td className="border-top-0">Grades Due:05/01/2020</td>
                                       <td className="border-top-0"><Button component={Link} to="/" variant="contained" className="btn-primary text-white text-center">See Course </Button></td>
                                    </tr>
                                 </Collapse>
                              </td>
                           </tr>
                        }

                     </tbody>
                     {/* <tfoot className="border-top">
                        <tr>
                           <td colSpan="100%">
                              <Pagination className="mb-0 py-10 px-10">
                                 <PaginationItem>
                                    <PaginationLink previous href="#" />
                                 </PaginationItem>
                                 <PaginationItem active>
                                    <PaginationLink href="javascript:void(0)">1</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">2</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">3</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink next href="javascript:void(0)" />
                                 </PaginationItem>
                              </Pagination>
                           </td>
                        </tr>
                     </tfoot> */}
                  </table>
               </div>
               {loading &&
                  <RctSectionLoader />
               }
            </RctCollapsibleCard>
            <RctCollapsibleCard fullBlock>
               <div className="table-responsive">
                  <div className="d-flex justify-content-between py-20 px-20 border-bottom">
                     <div>
                        <h3 className="m-0">Colleges Who Have Added This Class</h3>
                     </div>
                     <div>
                        <a href="javascript:void(0)" onClick={() => this.opnAddNewUserModal()} color="primary" className="caret btn-sm mr-10">Add New User <i className="zmdi zmdi-plus"></i></a>
                     </div>
                  </div>
                  <table className="table table-middle table-hover mb-0">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>State</th>
                           <th>Email</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>John Doe</td>
                           <td>Mi</td>
                           <td>black@adrian.edu</td>
                        </tr>
                        <tr>
                           <td>John Doe</td>
                           <td>Mi</td>
                           <td>black@adrian.edu</td>
                        </tr>
                        <tr>
                           <td>John Doe</td>
                           <td>Mi</td>
                           <td>black@adrian.edu</td>
                        </tr>
                     </tbody>
                     {/* <tfoot className="border-top">
                        <tr>
                           <td colSpan="100%">
                              <Pagination className="mb-0 py-10 px-10">
                                 <PaginationItem>
                                    <PaginationLink previous href="#" />
                                 </PaginationItem>
                                 <PaginationItem active>
                                    <PaginationLink href="javascript:void(0)">1</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">2</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">3</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink next href="javascript:void(0)" />
                                 </PaginationItem>
                              </Pagination>
                           </td>
                        </tr>
                     </tfoot> */}
                  </table>
               </div>
               {loading &&
                  <RctSectionLoader />
               }
            </RctCollapsibleCard>
            <RctCollapsibleCard fullBlock>
               <div className="table-responsive">
                  <div className="d-flex justify-content-between py-20 px-20 border-bottom">
                     <div>
                        <h3 className="m-0">My Students is This Class</h3>
                     </div>
                     <div>
                        <a href="javascript:void(0)" onClick={() => this.opnAddNewUserModal()} color="primary" className="caret btn-sm mr-10">Add New User <i className="zmdi zmdi-plus"></i></a>
                     </div>
                  </div>
                  <table className="table table-middle table-hover mb-0">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Birthday</th>
                           <th>Student Id</th>
                           <th>College</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>John Doe</td>
                           <td>black@adrian.edu</td>
                           <td>01/01/99</td>
                           <td>2453168</td>
                           <td>Hope College</td>
                        </tr>
                        <tr>
                           <td>John Doe</td>
                           <td>black@adrian.edu</td>
                           <td>01/01/99</td>
                           <td>2453168</td>
                           <td>Hope College</td>
                        </tr>
                        <tr>
                           <td>John Doe</td>
                           <td>black@adrian.edu</td>
                           <td>01/01/99</td>
                           <td>2453168</td>
                           <td>Hope College</td>
                        </tr>
                     </tbody>
                     {/* <tfoot className="border-top">
                        <tr>
                           <td colSpan="100%">
                              <Pagination className="mb-0 py-10 px-10">
                                 <PaginationItem>
                                    <PaginationLink previous href="#" />
                                 </PaginationItem>
                                 <PaginationItem active>
                                    <PaginationLink href="javascript:void(0)">1</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">2</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">3</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink next href="javascript:void(0)" />
                                 </PaginationItem>
                              </Pagination>
                           </td>
                        </tr>
                     </tfoot> */}
                  </table>
               </div>
               {loading &&
                  <RctSectionLoader />
               }
            </RctCollapsibleCard>
            <RctCollapsibleCard fullBlock>
               <div className="table-responsive">
                  <div className="d-flex justify-content-between py-20 px-20 border-bottom">
                     <div>
                        <h3 className="m-0">External Students is This Class</h3>
                     </div>
                     <div>
                        <a href="javascript:void(0)" onClick={() => this.opnAddNewUserModal()} color="primary" className="caret btn-sm mr-10">Add New User <i className="zmdi zmdi-plus"></i></a>
                     </div>
                  </div>
                  <table className="table table-middle table-hover mb-0">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Birthday</th>
                           <th>Student Id</th>
                           <th>College/Company</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>John Doe</td>
                           <td>black@adrian.edu</td>
                           <td>01/01/99</td>
                           <td>2453168</td>
                           <td>Hope College</td>
                        </tr>
                        <tr>
                           <td>John Doe</td>
                           <td>black@adrian.edu</td>
                           <td>01/01/99</td>
                           <td>2453168</td>
                           <td>Hope College</td>
                        </tr>
                        <tr>
                           <td>John Doe</td>
                           <td>black@adrian.edu</td>
                           <td>01/01/99</td>
                           <td>2453168</td>
                           <td>Hope College</td>
                        </tr>
                     </tbody>
                     {/* <tfoot className="border-top">
                        <tr>
                           <td colSpan="100%">
                              <Pagination className="mb-0 py-10 px-10">
                                 <PaginationItem>
                                    <PaginationLink previous href="#" />
                                 </PaginationItem>
                                 <PaginationItem active>
                                    <PaginationLink href="javascript:void(0)">1</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">2</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink href="javascript:void(0)">3</PaginationLink>
                                 </PaginationItem>
                                 <PaginationItem>
                                    <PaginationLink next href="javascript:void(0)" />
                                 </PaginationItem>
                              </Pagination>
                           </td>
                        </tr>
                     </tfoot> */}
                  </table>
               </div>
               {loading &&
                  <RctSectionLoader />
               }
            </RctCollapsibleCard>
            <DeleteConfirmationDialog
               ref="deleteConfirmationDialog"
               title="Are You Sure Want To Delete?"
               message="This will delete user permanently."
               onConfirm={() => this.deleteUserPermanently()}
            />
            <Modal isOpen={this.state.addNewUserModal} toggle={() => this.onAddUpdateUserModalClose()}>
               <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                  {editUser === null ?
                     'Add New User' : 'Update User'
                  }
               </ModalHeader>
               <ModalBody>
                  {editUser === null ?
                     <AddNewUserForm
                        addNewUserDetails={this.state.addNewUserDetail}
                        onChangeAddNewUserDetails={this.onChangeAddNewUserDetails.bind(this)}
                     />
                     : <UpdateUserForm user={editUser} onUpdateUserDetail={this.onUpdateUserDetails.bind(this)} />
                  }
               </ModalBody>
               <ModalFooter>
                  {editUser === null ?
                     <Button variant="contained" className="text-white btn-success" onClick={() => this.addNewUser()}>Add</Button>
                     : <Button variant="contained" color="primary" className="text-white" onClick={() => this.updateUser()}>Update</Button>
                  }
                  {' '}
                  <Button variant="contained" className="text-white btn-danger" onClick={() => this.onAddUpdateUserModalClose()}>Cancel</Button>
               </ModalFooter>
            </Modal>
            <Dialog
               open={this.state.open}
               TransitionComponent={Transition}
               keepMounted
               onClose={this.handleClose}
               aria-labelledby="alert-dialog-slide-title"
               aria-describedby="alert-dialog-slide-description"
            >
               <DialogTitle id="alert-dialog-slide-title">
                  {"For registration Contact Below Email ID for Now"}
               </DialogTitle>
               <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                     For Stydent :<a href="mailto:registration@rizeeducation.co" title="">registration@rizeeducation.co</a><br></br>
                     For Enterprise Customers :<a href="mailto:registration@rizeeducation.co" title="">registration@rizeeducation.co</a>
            		</DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button variant="contained" onClick={this.handleClose} className="btn-danger text-white mr-10">Close</Button>                  
               </DialogActions>
            </Dialog>
            <Dialog
               onClose={() => this.setState({ openViewUserDialog: false })}
               open={this.state.openViewUserDialog}
            >
               <DialogContent>
                  {selectedUser !== null &&
                     <div>
                        <div className="clearfix d-flex">
                           <div className="media pull-left">
                              <img src={selectedUser.avatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
                              <div className="media-body">
                                 <p>Name: <span className="fw-bold">{selectedUser.name}</span></p>
                                 <p>Type: <span className="badge badge-success">Registrar</span></p>
                                 <p>Email: <span className="fw-bold">{selectedUser.emailAddress}</span></p>
                                 <p>Number: (555) 5555-55555</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  }
               </DialogContent>
            </Dialog>
         </div>
      );
   }
}

