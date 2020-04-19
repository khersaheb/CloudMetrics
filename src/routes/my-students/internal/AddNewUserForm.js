/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from '../../common/DatePicker';

const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    <Form>
        <FormGroup>
            <Label for="userName">Name</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Name"
            />
        </FormGroup>        
        <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Email"
            />
        </FormGroup>
        <FormGroup>
            <Label for="birthday">Birthday</Label>
            <DatePicker class="form-control" />
        </FormGroup>        
        <FormGroup>
            <Label for="number">Students Id</Label>
            <Input
                type="number"
                placeholder="Enter Number"
            />
        </FormGroup>
        <FormGroup>
            <Label for="className">Class name</Label>
            <Input
                type="text"
                name="className"
                id="className"
                placeholder="Enter Class name"
            />
        </FormGroup> 
        <FormGroup>
            <Label for="number">My Class Id</Label>
            <Input
                type="number"
                placeholder="Enter Number"
            />
        </FormGroup>
    </Form>
);

export default AddNewUserForm;
