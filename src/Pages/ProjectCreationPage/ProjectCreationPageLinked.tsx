import Header from "../../components/Shared/Header/Header";
import "./ProjectCreationPage.scss";

// const createProject = gql`
// mutation ($name: String!, $timeEstimation: number) {
//   createProject(data: {$name: String!, $timeEstimation: number}) {
//     id
//     name
//     isClosed
//     timeEstimation
//   }
// }
// `;

function ProjectCreationPageLinked(): JSX.Element {
  /*const [name, setName] = useState('');
const [timeEstimation, setTimeEstimation] = useState(0);
const [id, setId] = useState(0);
const [isClosed, setIsClosed] = useState(false);
const [projectOwner, setProjectOwner] = useState('');
const [projectMember, setProjectMember] = useState(['']);
const [doCreateProject, { loading, error }] = useMutation(createProject);

const onSubmit = async () => {
  await doCreateProject({
      variables: {
        name: name,
        timeEstimation: timeEstimation,
      }
  });
};

let projectMembers: string[] = [];

const handleAdd = (projectMember: string) => {
  const updatedProjectMembers = [...projectMembers];
  updatedProjectMembers.push(projectMember);
  setProjectMember(updatedProjectMembers);
}

  return (
    <>
    <Header></Header>
    <div id="main_central_element">
    <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
    <Grid item spacing={8}>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><PersonIcon color="secondary"></PersonIcon></Grid>
    <Grid item xs={10} ><TextField id="name" label="Project Title" variant="standard" value={name} onChange={e => setName(e.target.value)}/></Grid>
  </Grid>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50,marginTop: 25}} ><PersonIcon color="secondary"></PersonIcon></Grid>
    <Grid item xs={10}><TextField id="Lastname" label="Initial Time Estimee" variant="standard" sx={{ marginTop: 1 }} value={timeEstimation || ""}/></Grid>
    </Grid>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><PersonIcon color="secondary"></PersonIcon></Grid>
    <Grid item xs={10}><TextField id="Project Members" label="Project Owner" variant="standard" sx={{ marginTop: 1 }}/></Grid>
  </Grid>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><PersonIcon color="secondary"></PersonIcon></Grid>
    <Grid item xs={10}><TextField id="Project Members" label="Project Member" variant="standard" sx={{ marginTop: 1 }}/></Grid>
  </Grid>
  </Grid>
  </Grid>
  <Stack spacing={2} direction="row"></Stack>
  {error && <p>Please fill out all fields completely. </p>}
  <Button onClick={handleAdd} variant="contained" sx={{ marginTop: 3, width: '25ch' }} disabled={loading === true}> ADD MORE MEMBERS</Button>
  </div>

  <Button onClick={onSubmit} variant="contained" sx={{ marginTop: 3, width: '25ch' }} disabled={loading === true}>CONFIRM CREATION</Button>
  </>
  )
} */
  return (
    <>
      <Header></Header>
    </>
  );
}

export default ProjectCreationPageLinked;
