import axios from "axios";
import { useQuery } from "react-query";
import IPost from "../interface/IPost";

const fetchUserPosts = (userId: string): Promise<IPost[]> => 
	axios
		.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
		.then((response) => response.data);


export default function useUserPosts(userId: string) {
	return useQuery(["posts", userId], () => fetchUserPosts(userId));
}