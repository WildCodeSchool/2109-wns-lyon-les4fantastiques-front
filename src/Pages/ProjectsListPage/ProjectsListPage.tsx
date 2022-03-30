import React, { useContext, useEffect } from "react";
import Header from "../../components/Shared/Header/Header";
import { usersContext } from "../../contexts/Users/UsersProvider";
import "./ProjectsListPage.scss";

function ProjectsListPage(): JSX.Element {
  const { currentUser } = useContext(usersContext);
  return (
    <>
      <>
        <Header />
        {currentUser && (
          <div>
            <p>ProjectsListPage</p>
          </div>
        )}
      </>
    </>
  );
}

export default ProjectsListPage;
