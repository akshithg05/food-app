// This is an integration test

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/AllResDataMock.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import { act } from "react";

// Here we are mocking the 'fetch()' function in the js-dom environment.
// fetch() is a web API provided by the browser and it is not recognized
// by js-dom. Hence we mock it here by awaiting once to get a response and
// awaiting again to get the json response.

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should filter restaurants when searching for 'burger'", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const inputBox = screen.getByPlaceholderText("Search...");
  const searchButton = screen.getByRole("button", { name: "Search" });

  fireEvent.change(inputBox, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  // Wait until DOM updates
  const filteredCards = await screen.findAllByTestId("resCard");
  expect(filteredCards.length).toBe(3);
});

test(" Should render top rated restaurants when the button is clicked", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const restaurantCards = await screen.findAllByTestId("resCard");
  expect(restaurantCards.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top rated restaurants (> 4.5 stars)",
  });
  fireEvent.click(topRatedButton);

  const topRatedResCards = await screen.findAllByTestId("resCard");
  expect(topRatedResCards.length).toBe(2);
});
