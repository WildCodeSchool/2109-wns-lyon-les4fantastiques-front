import React, { useContext } from "react";
import Header from "../../components/Shared/Header/Header";
import { usersContext } from "../../contexts/Users/UsersProvider";
import "./ProjectsListPage.scss";

function ProjectsListPage() {
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
