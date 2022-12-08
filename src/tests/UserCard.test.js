/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserCard from "../components/UserCard/UserCard";
import renderWithRouter from "./helpers/renderWithRouter";
import { mockUser } from "./mocks";
import React from "react";

describe("The UserCard component:", () => {
	it("Renders correctly", () => {
		render(<UserCard user={mockUser}/>);

		const userImg = screen.getByRole("img");
		const userName = screen.getByRole("heading", { name: /leanne graham/i, level: 2});
		const button = screen.getByRole("button", { name: /details/i});
  
		expect(userImg).toBeDefined();
		expect(userImg.src).toBe(mockUser.img);
		expect(userImg.alt).toBe(mockUser.name);
		expect(userName).toBeDefined();
		expect(button).toBeDefined();
	});

	it("When the button is clicked, it redirects to the correct route", () => {
		const { history } = renderWithRouter(<UserCard user={mockUser}/>);

		const button = screen.getByRole("button", { name: /details/i});

		userEvent.click(button);

		const { location: { pathname }} = history;

		expect(pathname).toBe(`/details/${mockUser.id}`);  
	});


});