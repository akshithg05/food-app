import { sum } from "../components/sum";

test("Sum function should calculate the sum of 2 numbers", () => {
  const res = sum(3, 4);

  // Assertion
  expect(res).toBe(7);
});
