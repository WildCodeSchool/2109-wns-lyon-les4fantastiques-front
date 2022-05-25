import { useMutation } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { ADDUSERTOPROJECT, CREATEPROJECT } from "./gql/mutations";
import { IProjectInput, IProjectsContext, IUserInput } from "./types";

interface IProps {
  children: ReactNode;
}

const projectsContext = createContext<IProjectsContext>({} as IProjectsContext);

const ProjectsProvider = (props: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [doCreateProject] = useMutation(CREATEPROJECT);
  const [doAddUserToProject] = useMutation(ADDUSERTOPROJECT);

  const createProject = async (projectToCreate: IProjectInput, users: IUserInput[]) => {
    setIsLoading(true);
    try {
      const res = await doCreateProject({
        variables: {
          data: projectToCreate
        }
      });
      if (res.data.createProject) {
        users.forEach(async (user: IUserInput) => {
          await doAddUserToProject({
            variables: {
              data: { ...user, projectId: parseInt(res.data.createProject.id) }
            }
          });
        });
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

  const contextValue: IProjectsContext = {
    createProject,
    isLoading
  };

  return <projectsContext.Provider value={contextValue}>{props.children}</projectsContext.Provider>;
};

export { projectsContext };
export default ProjectsProvider;
