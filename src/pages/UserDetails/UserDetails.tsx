import { useHistory, useParams } from "react-router-dom";
import UserDetailsCard from "../../components/UserDetailsCard/UserDetailsCard";
import useUserPosts from "../../hooks/useUserPosts";
import useUsers from "../../hooks/useUsers";
import styles from "./UserDetails.module.css";

export default function UserDetails() {
	const history = useHistory();
	const { id } = useParams<{ id: string }>();
	const { data: users } = useUsers();
	const { data: posts, isLoading, isIdle, isError } = useUserPosts(id);

	const handleClick = () => {
		history.push("/");
	};

	const user = users?.find(({ id: userId }) => Number(id) === userId);

	if (!user) return <p>User not found</p>;

	if (isLoading || isIdle) return <p>Loading</p>;
  
	if (isError) return <p>Something went wrong!</p>;

	return(
		<div className={styles.details_card}>
			<UserDetailsCard user={user} />
			<hr />
			<h3>Posts</h3>
			{
				posts.map((post) => {
					return <div key={post.id} className={styles.post}>
						<h4>{post.title}</h4>
						<p>{post.body}</p>
					</div>;
				})
			}
			<button onClick={handleClick}>Return</button>
		</div>
	);
}