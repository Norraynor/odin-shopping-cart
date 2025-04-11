import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "../Home";
describe("Home", () => {
	it("renders headline", () => {
		render(<Home />);
		screen.debug();

		expect(screen.getByText("div").textContent).toBeInTheDocument();
		// check if App components renders headline
	});
});
