/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    <Form>
        <FormGroup>
            <Label for="userName">Name</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Name"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userType">Type</Label>
            <Input
                type="text"
                name="userType"
                id="userType"
                placeholder="Enter Type"
                value={addNewUserDetails.type}
                onChange={(e) => onChangeAddNewUserDetails('type', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Email"
                value={addNewUserDetails.emailAddress}
                onChange={(e) => onChangeAddNewUserDetails('emailAddress', e.target.value)}
            />
        </FormGroup>        
        <FormGroup>
            <Label for="number">Number</Label>
            <Input
                type="number"
                placeholder="Enter Number"
                value={addNewUserDetails.accountType}
                onChange={(e) => onChangeAddNewUserDetails('number', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default AddNewUserForm;
