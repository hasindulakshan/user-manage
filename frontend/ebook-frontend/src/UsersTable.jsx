import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = (props) => {
    return (
        <TableContainer component={Paper}>

            <Table>

                <TableHead>
                    <TableRow>

                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        // map() function, transforms array into another array
                        props.rows.length > 0 ? props.rows.map(row => (

                            <TableRow key={row.id}>
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell component='th' scope="row">{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: "0px 10px" }}
                                        onClick={() => { }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        sx={{ margin: "0px 10px" }}
                                        onClick={() => { }}
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>

                        )) : (
                            <TableRow>
                                <TableCell component='th' scope="row">No users</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>

            </Table>

        </TableContainer>
    );
};

export default UsersTable;
