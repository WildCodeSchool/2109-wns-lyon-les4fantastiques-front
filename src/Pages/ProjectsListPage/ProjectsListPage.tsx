import React from "react";
import Header from "../../components/Shared/Header/Header";
import { useAuth } from "../../contexts/Auth/AuthProvider";
import "./ProjectsListPage.scss";

function ProjectsListPage() {
  const { currentUser } = useAuth();
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
