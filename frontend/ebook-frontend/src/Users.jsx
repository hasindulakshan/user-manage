import { Box } from "@mui/material";
import UserForm from "./UserForm.jsx";
import UsersTable from "./UsersTable.jsx";

const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Alex Henry",
    },
];

const Users = () => {

    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '50px',
            }}
        >
            <UserForm />
            <UsersTable rows={users} /> {/*Pass the users array as a prop to the UsersTable component*/}
        </Box>
    )
};

export default Users;
