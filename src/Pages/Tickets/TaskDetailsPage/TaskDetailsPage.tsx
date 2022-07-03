import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Shared/Header/Header";
import { useAuth } from "../../../contexts/Auth/AuthProvider";
import { ticketsContext } from "../../../contexts/Tickets/TicketsProvider";
import { IComment, ITicket, IUserTicket } from "../../../contexts/Tickets/types";
import { IUser } from "../../../contexts/Users/types";
import { getLastPart } from "../../../helpers/getLastPart";
import getPercentageTimeSpent from "../../../helpers/getPercentageTimeSpent";
import "./TaskDetailsPage.scss";

const TaskDetailsPage = () => {
  const [status, setStatus] = useState<string | undefined>("");
  const [ticketId, setTicketId] = useState<number | undefined>();
  const [timeEstimation, setTimeEstimation] = useState<number | undefined>(0);
  const [timeSpent, setTimeSpent] = useState<number | undefined>(0);
  const [comments, setComments] = useState<IComment[]>([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const [userAssigned, setUserAssigned] = useState<IUser>();
  const location = useLocation();
  const { ticket, getTicketById, addCommentToTicket, updateTicket } = useContext(ticketsContext);
  const { currentUser } = useAuth();

  const handleStatusChange = async (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
    await handleUpdateTicket(event.target.value);
  };
  const handleTimeEstimationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeEstimation(parseInt(event.target.value));
  };
  const handleTimeSpentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeSpent(parseInt(event.target.value));
  };

  const handleUserAssignedChange = (event: SelectChangeEvent<any>) => {
    handleUpdateTicket(undefined, event.target.value);
  };

  const handleAddComment = async () => {
    if (ticketId) {
      const res = await addCommentToTicket(ticketId, comment);
      if (res) {
        setComments((prevComs) => [
          ...prevComs,
          {
            content: comment,
            author: { firstname: currentUser.firstname, lastname: currentUser.lastname }
          } as IComment
        ]);
      } else {
        setError("Unable to add comment");
      }
    }
  };

  const handleUpdateTicket = async (updatedStatus?: string, userAssignedId?: string) => {
    if (ticketId && ticket) {
      const ticketBody = {
        ...(timeSpent && timeSpent !== ticket.timeSpent && { timeSpent }),
        ...(timeEstimation && timeEstimation !== ticket.timeEstimation && { timeEstimation }),
        ...(updatedStatus && updatedStatus !== ticket.status && { status: updatedStatus }),
        ...(userAssignedId && { userAssignedId: +userAssignedId })
      };
      const res = await updateTicket(ticketId, ticketBody as ITicket);
      if (res) {
        window.location.reload();
      } else {
        setError("Unable to update ticket");
      }
    }
  };

  const handleOpenImg = (url: string) => {
    window.open(`http://localhost:4001/${url}`);
  };

  useEffect(() => {
    const pathname = getLastPart(location?.pathname);
    if (pathname) {
      const id = parseInt(pathname);
      if (id) {
        setTicketId(id);
        getTicketById(id);
      }
    }
  }, [location]);

  useEffect(() => {
    if (ticket) {
      setStatus(ticket.status);
      setTimeEstimation(ticket.timeEstimation);
      setTimeSpent(ticket.timeSpent);
      setComments(ticket.comments);
      const userTickets = ticket.userTicket.filter(
        (userTicket: IUserTicket) => userTicket.role === "ASSIGNEE"
      );
      setUserAssigned(userTickets[0]?.user);
    }
  }, [ticket]);

  return (
    <>
      <Header />
      {ticket && (
        <div id="ticket-container">
          <h1 className="ticket-title">{ticket.name}</h1>
          <div className="article-container">
            <div style={{ width: "45%" }} className="card-container">
              {ticket.description}
            </div>
            <div className="card-container" style={{ width: "45%" }}>
              <div className="select">
                <label className="label" htmlFor="ticket-status">
                  Status
                </label>
                <Select
                  name="ticket-status"
                  labelId="ticket-status-select-label"
                  id="ticket-status-select"
                  value={status || "todo"}
                  label="Status"
                  onChange={handleStatusChange}
                  variant="standard"
                >
                  <MenuItem value={"todo"}>todo</MenuItem>
                  <MenuItem value={"doing"}>doing</MenuItem>
                  <MenuItem value={"done"}>done</MenuItem>
                </Select>
              </div>
              <div className="select">
                <label className="label" htmlFor="ticket-time-estimation">
                  Time estimation
                </label>
                <TextField
                  name="ticket-time-estimation"
                  style={{ width: "25%" }}
                  variant="standard"
                  type="number"
                  value={timeEstimation || 0}
                  onChange={handleTimeEstimationChange}
                />
                <p className="unit">hours</p>
              </div>
              <div className="select">
                <label className="label" htmlFor="ticket-time-spent">
                  Time spent
                </label>
                <TextField
                  className="input"
                  name="ticket-time-spent"
                  style={{ width: "25%" }}
                  variant="standard"
                  type="number"
                  value={timeSpent || 0}
                  onChange={handleTimeSpentChange}
                />
                <p className="unit">hours</p>
              </div>
              <Button
                variant="contained"
                onClick={() => handleUpdateTicket()}
                disabled={
                  timeSpent === ticket.timeSpent && timeEstimation === ticket.timeEstimation
                }
              >
                Confirm changes
              </Button>
            </div>
            <div className="card-container">
              <div className="select">
                <label className="label" htmlFor="ticket-assignee">
                  Assignee
                </label>
                <Select
                  name="ticket-assignee"
                  labelId="ticket-assignee-select-label"
                  id="ticket-assignee-select"
                  value={userAssigned?.id || ""}
                  label="User Assigned"
                  variant="standard"
                  onChange={handleUserAssignedChange}
                >
                  {ticket.project.userProject.map((userProject: any, index: number) => (
                    <MenuItem value={userProject.user.id} key={index}>
                      {`${userProject.user.firstname} ${userProject.user.lastname}`}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="select">
                <label className="label" htmlFor="ticket-percentage-time-spent">
                  Percentage time spent
                </label>
                <p style={{ color: "white" }}>
                  {getPercentageTimeSpent(ticket.timeSpent, ticket.timeEstimation)} %
                </p>
              </div>
              <div className="pictures-list">
                {ticket.pictures.map((picture: { contentUrl: string }, index: number) => (
                  <div key={index} onClick={() => handleOpenImg(picture.contentUrl)}>
                    <img src={`http://localhost:4001/${picture.contentUrl}`} className="picture" />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-container comment-container">
              <h1 className="ticket-title">Comments</h1>
              <div className="comments-container">
                {comments.map((comment: IComment, index: number) => (
                  <div className="comment" key={index}>
                    <p className="comment-content">{comment.content}</p>
                    <span className="comment-author">{`${comment.author.firstname} ${comment.author.lastname}`}</span>
                    <hr />
                  </div>
                ))}
                <div className="comment-input-container">
                  <TextField
                    variant="standard"
                    label="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="comment-input"
                  />
                  <Button variant="contained" disabled={!comment} onClick={handleAddComment}>
                    Add Comment
                  </Button>
                  {error}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDetailsPage;
