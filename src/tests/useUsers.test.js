/* eslint-disable no-undef */
import MockAdapter from "axios-mock-adapter";
import useUsers from "../hooks/useUsers";
import { mockManyUsers } from "./mocks";
import mockPlaceholderUsers from "./mocks/mockPlaceholderUsers";

describe("The useUsers hook:", () => {
	it("Returns the expected object", () => {
		const mock = new MockAdapter(axios);

		mock.onGet("https://jsonplaceholder.typicode.com/users").reply(200, mockPlaceholderUsers);
		mock.onGet("https://randomuser.me/api/").reply(200, "https://picsum.photos/200");

		const result = useUsers();

		expect(result).toEqual(mockManyUsers);
	});
});