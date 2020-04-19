/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from '../common/DatePicker';

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
            <Label for="number">Student Id</Label>
            <Input
                type="number"
                placeholder="Enter Student Id"
            />
        </FormGroup>
        <FormGroup>
            <Label for="text">College</Label>
            <Input
                type="text"
                placeholder="Enter College"
            />
        </FormGroup>        
    </Form>
);

export default AddNewUserForm;
