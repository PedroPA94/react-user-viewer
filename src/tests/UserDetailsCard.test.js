/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import UserDetailsCard from "../components/UserDetailsCard/UserDetailsCard";
import { mockUser } from "./mocks";

describe("The UserDetailsCard component:", () => {
	it("Renders correctly", () => {
		render(<UserDetailsCard user={mockUser} />);

		const userImg = screen.getByRole("img");
		const userName = screen.getByRole("heading", { name: /leanne graham/i, level: 2});
		const userUsername = screen.getByText(/bret/i);
		const userEmail = screen.getByText(/sincere@april.biz/i);

  
		expect(userImg).toBeDefined();
		expect(userImg.src).toBe(mockUser.img);
		expect(userImg.alt).toBe(mockUser.name);
		expect(userName).toBeDefined();
		expect(userUsername).toBeDefined();
		expect(userEmail).toBeDefined();
	});
});