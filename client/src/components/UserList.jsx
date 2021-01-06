import React from "react";
import { List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton } from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='name' />
            <EmailField source='email' />
            <DateField source='date' />
            <EditButton basePath='/users' />
            <DeleteButton basePath='/users' />
        </Datagrid>
    </List>
  )
}

export default UserList;
