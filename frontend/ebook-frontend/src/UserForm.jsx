import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = (props) => {

    const [id, setId] = useState(0) // Declare a state variable for id. 
    const [name, setName] = useState("") // Declare a state variable for name.

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: "white",
                marginBottom: "20px",
                display: "block",
            }}
        >
            <Grid item xs={12}>
                <Typography component={"h1"} sx={{ color: "#000000" }}>
                    User Form
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                <Typography
                    component={"label"}
                    htmlFor="id"
                    sx={{
                        color: "#000000",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: "400px" }}
                    //value={''}
                    value={id}  
                    //onChange={(e) => { }}
                    onChange={(e) => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                <Typography
                    component={"label"}
                    htmlFor="name"
                    sx={{
                        color: "#000000",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: "400px" }}
                    //value={''} 
                    value={name} 
                    //onChange={(e) => { }}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>

            <Button
                sx={{
                    margin: "auto",
                    marginBottom: "20px",
                    backgroundColor: "lightblue",
                    color: "#000000",
                    marginLeft: "10px",
                    marginTop: "20px",
                    "&:hover": {
                        opacity: 0.8,
                        backgroundColor: "lightblue",
                    },
                }}
            >
                Add
            </Button>
        </Grid>
    );
};

export default UserForm;
