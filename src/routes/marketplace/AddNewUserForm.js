/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    <Form>
        <FormGroup>
            <Label for="classsname">Classs Name</Label>
            <Input
                type="text"
                name="classsname"
                id="classsname"
                placeholder="Enter Classs Name"
            />
        </FormGroup>        
        <FormGroup>
            <Label for="rizetrack">Rize Track</Label>
            <Input
                type="text"
                name="rizetrack"
                id="rizetrack"
                placeholder="Enter Rize Track"
            />
        </FormGroup>
        <FormGroup>
            <Label for="major">Major(s)</Label>
            <Input
                type="text"
                name="major"
                id="major"
                placeholder="Enter Major"
            />
        </FormGroup>
        <FormGroup>
            <Label for="collegesoffering">Colleges Offering</Label>
            <Input
                type="text"
                name="collegesoffering"
                id="collegesoffering"
                placeholder="Enter Colleges Offering"
            />
        </FormGroup>
        <FormGroup>
            <Label for="classtime">Level</Label>
            <Input
                type="text"
                name="classtime"
                id="classtime"
                placeholder="Enter Class Time"
            />
        </FormGroup>
        <FormGroup>
            <Label for="semester">Endorsements</Label>
            <Input
                type="text"
                name="semester"
                id="semester"
                placeholder="Enter Semester"
            />
        </FormGroup>        
    </Form>
);

export default AddNewUserForm;
