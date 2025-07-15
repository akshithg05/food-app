import { render, screen } from "@testing-library/react";
import {
  RestaurantCard,
  withLabelRestaurantCard,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardData.json";
import "@testing-library/jest-dom";

describe("Test cases for RestuarantCard", () => {
  test("Should render RestaurantCard Component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const resName = screen.getByText("Taco Bell");
    expect(resName).toBeInTheDocument();
  });

  test("Should render RestaurantCard with top rated label", () => {
    const RestaurantCardLabel = withLabelRestaurantCard(RestaurantCard);
    render(<RestaurantCardLabel resData={MOCK_DATA} />);

    const topRatedLabel = screen.getByText("Top rated!");

    expect(topRatedLabel).toBeInTheDocument();
  });
});
