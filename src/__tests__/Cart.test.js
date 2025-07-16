import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuPage from "../components/RestaurantMenuPage";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

test("Should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuPage />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Burgers & Wraps (5)");
  fireEvent.click(accordionHeader);

  const foodItems = await screen.findAllByTestId("food-items");

  expect(foodItems.length).toBe(5);
  expect(accordionHeader).toBeInTheDocument();
});

test("Should test if 0 cart item is present before click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuPage />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Burgers & Wraps (5)");
  fireEvent.click(accordionHeader);

  const foodItems = await screen.findAllByTestId("food-items");

  expect(foodItems.length).toBe(5);
  expect(accordionHeader).toBeInTheDocument();

  const cartTextBeforeClick = screen.getByText("Cart - (0) items");
  expect(cartTextBeforeClick).toBeInTheDocument();
});

test("Should test if 1 cart item is present", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuPage />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Burgers & Wraps (5)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addButtons[0]);

  const cartTextAfterClick = screen.getByText("Cart - (1) items");
  expect(cartTextAfterClick).toBeInTheDocument();
});

test("Should test if 1 cart item is present after minus-button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuPage />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Burgers & Wraps (5)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addButtons[0]);

  const cartTextAfterClick = screen.getByText("Cart - (2) items");
  expect(cartTextAfterClick).toBeInTheDocument();
});

test("Should test if cart item count decreases after clicking '-'", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuPage />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Burgers & Wraps (5)");
  fireEvent.click(accordionHeader);

  const minusButtons = screen.getAllByTestId("minus");
  fireEvent.click(minusButtons[0]);

  const cartTextAfterClick = screen.getByText("Cart - (1) items");
  expect(cartTextAfterClick).toBeInTheDocument();
});

test("Should test cart items are present by navigating to cart page", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuPage />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Burgers & Wraps (5)");
  fireEvent.click(accordionHeader);
  const addButtons = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addButtons[0]);

  const cartTextAfterClick = screen.getByText("Cart - (2) items");
  fireEvent.click(cartTextAfterClick);

  expect(screen.getByTestId("cart"));
});

test("Should test cart items are cleared", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuPage />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const clearCart = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clearCart);

  const cartTextAfterClick = screen.getByText("Cart - (0) items");
  expect(cartTextAfterClick).toBeInTheDocument();
});
