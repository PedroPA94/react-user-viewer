import IUser from "../../interface/IUser";
import styles from "./UserDetailsCard.module.css";

interface UserDetailsCardProps {
  user: IUser
}

export default function UserDetailsCard({ user }: UserDetailsCardProps) {
	return (
		<div className={styles.details_card}>
			<img src={user.img} alt={user.name} />
			<div>
				<h2>{user.name}</h2>
				<p><span>Username:</span> {user.username}</p>
				<p><span>Email:</span> {user.email}</p>
			</div>
		</div>
	);
}