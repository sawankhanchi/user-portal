import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
                <DateInput label='Date' source='publishedAt' />
            </SimpleForm>

        </Edit>
    )
}

export default UserEdit;
