import { useHistory } from "react-router-dom";
import IUser from "../../interface/IUser";
import Loading from "../Loading/Loading";
import styles from "./UserCard.module.css";

interface UserCardProps {
  user: IUser
}

export default function UserCard({user}: UserCardProps) {
	const history = useHistory();
  
	const handleClick = (id: number) => {
		history.push(`/details/${id}`);
	};

	return (
		<div className={styles.card}>
			{
				user.img
					? (
						<>
							<img src={user.img} alt={user.name} />
							<div>
								<h2>{user.name}</h2>
								<button type="button" onClick={() => handleClick(user.id)}>Details</button>
							</div>
						</>
					)
					: <Loading />
			}			
			
		</div>
	);
}