import mockPlaceholderUsers from "./mockPlaceholderUsers";

const mockManyUsers = mockPlaceholderUsers.map((user) => {
	user.img = "https://picsum.photos/200";
	return user;
});

export default mockManyUsers;