import { centuryFromYear, Input, Output } from "../century-from-year";

type Cases = [Input, Output][];

describe("Century From Year", () => {
  const cases: Cases = [
    [1905, 20],
    [1700, 17],
    [1988, 20],
    [2000, 20],
    [2001, 21],
    [200, 2],
    [374, 4],
    [45, 1],
    [8, 1],
  ];

  test.each(cases)(
    "for year %d output should be %d",
    (firstArg, expectedResult) => {
      const result = centuryFromYear(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
