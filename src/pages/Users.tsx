import UserCard from "../components/UserCard/UserCard";
import useUsers from "../hooks/useUsers";

export default function Users() {
	const {data, isLoading, isError, isIdle}  = useUsers();
  
	if (isLoading || isIdle) return <p>Loading</p>;
  
	if (isError) return <p>Something went wrong!</p>;

	return(
		<>
			<h1>Users</h1>
			{
				data.map((user) => <UserCard key={user.id} user={user} />)
			}
		</>
	);
}
