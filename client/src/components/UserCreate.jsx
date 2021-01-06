import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const UserCreate = (props) => {
    return (
        <Create title='Create a User' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
                <DateInput label='Date' source='date' />
            </SimpleForm>

        </Create>
    )
}

export default UserCreate;
