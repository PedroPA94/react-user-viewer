import IUser from "../../interface/IUser";

interface UserDetailsCardProps {
  user: IUser
}

export default function UserDetailsCard({ user }: UserDetailsCardProps) {
	return (
		<div>
			<img src={user.img} alt={user.name} />
			<div>
				<h2>{user.name}</h2>
				<p>{user.username}</p>
				<p>{user.email}</p>
			</div>
		</div>
	);
}