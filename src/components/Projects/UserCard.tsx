import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";

interface IProps {
  name: string;
  role: string;
}

const UserCard: FC<IProps> = ({ name, role }: IProps) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", marginTop: 10, marginBottom: 10 }}
    >
      <PersonIcon style={{ color: role === "DEV" ? "#06d6a0" : "#ef476f" }} />
      <span>{name}</span>
    </div>
  );
};

export default UserCard;
