import mockUser from "./mockUser";

const mockManyUsers = [
	...Array.from(Array(10).keys()).map(() => mockUser)
];

export default mockManyUsers;