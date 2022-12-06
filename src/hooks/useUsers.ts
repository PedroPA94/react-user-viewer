import axios from "axios";
import { useQueries, useQuery } from "react-query";
import IUser from "../interface/IUser";

const fetchUsers = (): Promise<IUser[]> => 
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.data);

const fetchProfilePic = (): Promise<string> => 
	axios
		.get("https://randomuser.me/api/")
		.then((response) => response.data.results[0].picture.large);
  
export default function useUsers() {
	const numberOfProfilePics = Array.from(Array(10).keys()); // fetchUsers returns 10 users, so we need 10 pics
	const profilePics = useQueries(
		numberOfProfilePics.map((picNumber) => {
			return {
				queryKey: ["pic", picNumber],
				queryFn: fetchProfilePic,
				staleTime: Infinity
			};
		})
	);
	return useQuery("users", fetchUsers, {
		enabled: !!profilePics,
		select: (data) => {
			data.forEach((user, index) => user.img = profilePics[index].data);
			return data;
		}
	});
}