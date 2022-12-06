import { useHistory, useParams } from "react-router-dom";
import UserDetailsCard from "../components/UserDetailsCard/UserDetailsCard";
import useUserPosts from "../hooks/useUserPosts";
import useUsers from "../hooks/useUsers";

export default function UserDetails() {
	const history = useHistory();
	const { id } = useParams<{ id: string }>();
	const { data: users } = useUsers();

	const handleClick = () => {
		history.push("/");
	};

	const user = users?.find(({ id: userId }) => Number(id) === userId);

	if (!user) return <p>User not found</p>;

	const { data: posts, isLoading, isIdle, isError } = useUserPosts(id);

	if (isLoading || isIdle) return <p>Loading</p>;
  
	if (isError) return <p>Something went wrong!</p>;

	return(
		<>
			<UserDetailsCard user={user} />
			<h3>Posts</h3>
			{
				posts.map((post) => {
					return <li key={post.id}>{post.body}</li>;
				})
			}
			<button onClick={handleClick}>return</button>
		</>
	);
}