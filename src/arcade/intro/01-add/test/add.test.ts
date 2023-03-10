import { add, Output, Param1, Param2 } from "../add";

type Cases = [Param1, Param2, Output][];

describe("Add", () => {
  const cases: Cases = [
    [1, 2, 3],
    [0, 1000, 1000],
    [2, -39, -37],
    [99, 100, 199],
    [-100, 100, 0],
    [-1000, -1000, -2000],
  ];

  test.each(cases)(
    "for sum of %d and %d output should be %d",
    (firstArg, secondArg, expectedResult) => {
      const result = add(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
