import Loading from "../../components/Loading/Loading";
import UserCard from "../../components/UserCard/UserCard";
import useUsers from "../../hooks/useUsers";
import styles from "./Users.module.css";

export default function Users() {
	const {data, isLoading, isError, isIdle}  = useUsers();
  
	if (isLoading || isIdle) return <Loading page />;
  
	if (isError) return <p>Something went wrong!</p>;

	return(
		<>
			<h1>Users</h1>
			<div className={styles.user_cards}>
				{
					data.map((user) => <UserCard key={user.id} user={user} />)
				}
			</div>
		</>
	);
}
