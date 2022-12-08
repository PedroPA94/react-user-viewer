/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import useUsers from "../hooks/useUsers";
import Users from "../pages/Users/Users";
import renderWithRouter from "./helpers/renderWithRouter";
import { mockManyUsers } from "./mocks";

jest.mock("../hooks/useUsers");
useUsers.mockReturnValue(({ data: mockManyUsers, isLoading: false, error:{} }));

describe("The Users page:", () => {

	afterEach(() => jest.clearAllMocks());
	
	it("Renders correctly", async () => {
		render(<Users />);
		
		expect(screen.getByRole("heading", { name: /users/i, level: 1})).toBeDefined();
		await expect(screen.getAllByRole("img").length).toBe(10);
		await expect(screen.getAllByRole("button", { name: /details/i }).length).toBe(10);
		await expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(10);
	});

	it("Redirects to the correct user details page on button click", async () => {
		const { history } = renderWithRouter(<Users />);

		const buttons = await screen.getAllByRole("button", { name: /details/i });

		userEvent.click(buttons[0]);

		const { location: { pathname }} = history;

		expect(pathname).toBe("/details/1");
	});
});