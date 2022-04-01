import React, { SyntheticEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, NavigateFunction } from "react-router-dom";
import { IUser } from "../../../../contexts/Users/types";
import { useAuth } from "../../../../contexts/Auth/AuthProvider";
interface IProps {
  navigate: NavigateFunction;
  currentUser: IUser;
}
function NavSelect({ navigate, currentUser }: IProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { signOut } = useAuth();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleSignOut = () => {
    navigate("/");
    signOut();
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Welcome {currentUser?.firstname}
        <ArrowDropDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "left top" : "left bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {currentUser?.role !== "DEV" && (
                    <MenuItem onClick={handleClose}>
                      <Link to="/create/project" style={{ color: "white", textDecoration: "none" }}>
                        Create a Project
                      </Link>
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleClose}>
                    <Link to="/create/task" style={{ color: "white", textDecoration: "none" }}>
                      Create a Task
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span
                      onClick={handleSignOut}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Sign Out
                    </span>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default NavSelect;
