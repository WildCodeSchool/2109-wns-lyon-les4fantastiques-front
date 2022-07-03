import React, { useEffect } from "react";
import "./NavBar.scss";
import { Tabs, Box, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { IUser } from "../../../../contexts/Users/types";
interface IProps {
  currentUser: IUser;
}

function NavBar({ currentUser }: IProps): JSX.Element {
  const [value, setValue] = React.useState("/tasks");

  useEffect(() => {
    const pathname = window.location.pathname;
    const valueToSet =
      pathname.includes("task") || pathname.includes("ticket")
        ? "/tasks"
        : pathname.includes("project")
        ? "/projects"
        : "/users";
    setValue(valueToSet);
  }, [window]);
  return (
    <div className="navbar-container">
      <Box
        sx={{
          width: "100%",
          marginLeft: 6
        }}
      >
        <Tabs value={value} textColor="secondary" indicatorColor="secondary">
          <Tab
            value="/tasks"
            label="TasksList"
            className="nav--item"
            component={Link}
            to="/tasks"
          />
          <Tab
            value="/projects"
            label="projects"
            className="nav--item"
            component={Link}
            to="/projects"
          />
          {currentUser?.role === "ADMIN" && (
            <Tab value="/users" label="users" className="nav--item" component={Link} to="/users" />
          )}
        </Tabs>
      </Box>
    </div>
  );
}

export default NavBar;
