import React, { useContext } from "react";
import "./NavBar.scss";
import { Tabs, Box, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { usersContext } from "../../../../contexts/Users/UsersProvider";

function NavBar(): JSX.Element {
  const [value, setValue] = React.useState("");
  const { currentUser } = useContext(usersContext);

  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };

  return (
    <div className="navbar-container">
      <Box
        sx={{
          width: "100%",
          marginLeft: 6
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            value="tasksList"
            label="TasksList"
            className="nav--item"
            component={Link}
            to="/tasks"
          />
          <Tab
            value="projectsList"
            label="ProjectsList"
            className="nav--item"
            component={Link}
            to="/projects"
          />
          {currentUser?.role === "ADMIN" && (
            <Tab
              value="usersList"
              label="Users"
              className="nav--item"
              component={Link}
              to="/users"
            />
          )}
        </Tabs>
      </Box>
    </div>
  );
}

export default NavBar;
