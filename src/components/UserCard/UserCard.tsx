import { useHistory } from "react-router-dom";
import IUser from "../../interface/IUser";

interface UserCardProps {
  user: IUser
}

export default function UserCard({user}: UserCardProps) {
	const history = useHistory();
  
	const handleClick = (id: number) => {
		history.push(`/details/${id}`);
	};

	return (
		<div onClick={() => handleClick(user.id)}>
			<img src={user.img} alt={user.name} />
			<h2>{user.name}</h2>
		</div>
	);
}