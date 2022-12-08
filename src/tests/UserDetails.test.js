/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";
import useUserPosts from "../hooks/useUserPosts";
import useUsers from "../hooks/useUsers";
import UserDetails from "../pages/UserDetails/UserDetails";
import renderWithRouter from "./helpers/renderWithRouter";
import { mockManyUsers, mockPost } from "./mocks";

jest.mock("../hooks/useUsers");
useUsers.mockReturnValue(({ data: mockManyUsers, isLoading: false, error:{} }));

jest.mock("../hooks/useUserPosts");
useUserPosts.mockReturnValue(({ data: [mockPost], isLoading: false, error:{} }));

describe("The UserDetails page:", () => {

	afterEach(() => jest.clearAllMocks());
	
	it("Renders correctly", async () => {
		renderWithRouter(<UserDetails />, "/details/1", "/details/:id");
		
		const posts = screen.getAllByRole("heading", { level: 4});

		expect(screen.getByRole("heading", { name: /leanne graham/i, level: 2})).toBeDefined();
		expect(screen.getByRole("heading", { name: /posts/i, level: 3})).toBeDefined();
		expect(posts.length).toBe(1);
		expect(posts[0].textContent).toBe(mockPost.title);
	});

	it("Redirects to the correct user details page on button click", async () => {
		const { history } = renderWithRouter(<UserDetails />, "/details/1", "/details/:id");

		const button = screen.getByRole("button", { name: /return/i });

		userEvent.click(button);

		const { location: { pathname }} = history;

		expect(pathname).toBe("/");
	});
});