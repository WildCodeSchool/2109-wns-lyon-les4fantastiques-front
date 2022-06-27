import { useLazyQuery, useMutation } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { ADDUSERTOPROJECT, CREATEPROJECT } from "./gql/mutations";
import { FETCHPROJECTBYID, FETCHPROJECTS } from "./gql/queries";
import { IProject, IProjectInput, IProjectsContext, IUserInput } from "./types";

interface IProps {
  children: ReactNode;
}

const projectsContext = createContext<IProjectsContext>({} as IProjectsContext);

const ProjectsProvider = (props: IProps) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [project, setProject] = useState<IProject>();
  const [isLoading, setIsLoading] = useState(false);

  const [doCreateProject] = useMutation(CREATEPROJECT);
  const [doAddUserToProject] = useMutation(ADDUSERTOPROJECT);

  const [fetchProjects] = useLazyQuery(FETCHPROJECTS, {
    onCompleted: (data) => {
      setProjects(data.getProjects);
    }
  });

  const [fetchProjectById] = useLazyQuery(FETCHPROJECTBYID, {
    onCompleted: (data) => {
      setProject(data.getProject);
    }
  });

  const getProjects = (): void => {
    fetchProjects();
  };

  const getProjectById = (id: number): void => {
    fetchProjectById({ variables: { id } });
  };

  const createProject = async (projectToCreate: IProjectInput, users: IUserInput[]) => {
    setIsLoading(true);
    try {
      const res = await doCreateProject({
        variables: {
          data: projectToCreate
        }
      });
      if (res.data.createProject) {
        for (const user of users) {
          await doAddUserToProject({
            variables: {
              data: { ...user, projectId: parseInt(res.data.createProject.id) }
            }
          });
        }
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const addUserToProject = async (userEmail: string, projectId: number) => {
    try {
      return await doAddUserToProject({
        variables: {
          data: { email: userEmail, projectId: projectId, role: "DEV" }
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const contextValue: IProjectsContext = {
    createProject,
    isLoading,
    getProjects,
    projects,
    getProjectById,
    project,
    addUserToProject
  };

  return <projectsContext.Provider value={contextValue}>{props.children}</projectsContext.Provider>;
};

export { projectsContext };
export default ProjectsProvider;
