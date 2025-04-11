import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import { useState } from "react";
import Shop from "../Shop";
import { CartContext } from "./CartContext"; // Adjust the import path as necessary

describe("Shop Component", () => {
	it("renders the shop headline", () => {
		const mockCartContextValue = {
			cartItems: [],
			cartItemsSize: 0,
		};
		render(
			<CartContext.Provider value={mockCartContextValue}>
				<Shop />
			</CartContext.Provider>
		);
		expect(screen.getByText("Our Shop")).toBeInTheDocument();
	});

	// it("renders the cart with initial count of 0", () => {
	// 	render(<Shop />);
	// 	expect(screen.getByText("(0)")).toBeInTheDocument();
	// });
});

// describe("Shop - findItem", () => {
// 	const findItem = (item, cartItems) => {
// 		return cartItems.find((cartItem) => cartItem.id === item.id) || null;
// 	};

// 	it("returns the correct item when it exists in the cart", () => {
// 		const mockCartItems = [
// 			{ id: 1, name: "Item 1", count: 2 },
// 			{ id: 2, name: "Item 2", count: 1 },
// 		];
// 		const mockItem = { id: 1, name: "Item 1" };

// 		const [cartItems] = useState(mockCartItems);
// 		const result = findItem(mockItem, cartItems);

// 		expect(result).toEqual(mockCartItems[0]);
// 	});

// 	it("returns null when the item does not exist in the cart", () => {
// 		const mockCartItems = [
// 			{ id: 1, name: "Item 1", count: 2 },
// 			{ id: 2, name: "Item 2", count: 1 },
// 		];
// 		const mockItem = { id: 3, name: "Item 3" };

// 		const [cartItems] = useState(mockCartItems);
// 		const result = findItem(mockItem, cartItems);

// 		expect(result).toBeNull();
// 	});

// 	it("returns the provided item if it is passed directly", () => {
// 		const mockItem = { id: 3, name: "Item 3" };

// 		const [cartItems] = useState([]);
// 		const result = findItem(mockItem, cartItems);

// 		expect(result).toEqual(mockItem);
// 	});
// });

// describe("Shop - addItem", () => {
// 	it("adds a new item to the cart", () => {
// 		const mockItem = { id: 1, name: "Item 1" };
// 		const [cartItems, setCartItems] = useState([]);

// 		const addItem = (item) => {
// 			setCartItems((prev) => [...prev, { ...item, count: 1 }]);
// 		};

// 		addItem(mockItem);

// 		expect(cartItems).toContainEqual({ id: 1, name: "Item 1", count: 1 });
// 	});

// 	it("updates the count of an existing item in the cart", () => {
// 		const mockItem = { id: 1, name: "Item 1" };
// 		const [cartItems, setCartItems] = useState([
// 			{ id: 1, name: "Item 1", count: 1 },
// 		]);

// 		const addItem = (item, count = 1) => {
// 			setCartItems((prev) =>
// 				prev.map((cartItem) =>
// 					cartItem.id === item.id ? { ...cartItem, count } : cartItem
// 				)
// 			);
// 		};

// 		addItem(mockItem, 3);

// 		expect(cartItems).toContainEqual({ id: 1, name: "Item 1", count: 3 });
// 	});
// });

// 	it("returns null when the item does not exist in the cart", () => {
// 		const mockCartItems = [
// 			{ id: 1, name: "Item 1", count: 2 },
// 			{ id: 2, name: "Item 2", count: 1 },
// 		];
// 		const mockItem = { id: 3, name: "Item 3" };

// 		const { result } = renderHook(() => {
// 			const [cartItems, setCartItems] = useState(mockCartItems);
// 			return { cartItems, findItem: (item) => findItem(item, cartItems) };
// 		});

// 		expect(result.current.findItem(mockItem)).toBeNull();
// 	});

// 	it("returns the provided item if it is passed directly", () => {
// 		const mockItem = { id: 3, name: "Item 3" };

// 		const { result } = renderHook(() => {
// 			const [cartItems, setCartItems] = useState([]);
// 			return { cartItems, findItem: (item) => findItem(item, cartItems) };
// 		});

// 		expect(result.current.findItem(mockItem)).toEqual(mockItem);
// 	});
// });
