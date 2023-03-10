import { Input, Output, shapeArea } from "../shape-area";

type Cases = [Input, Output][];

describe("Shape Area", () => {
  const cases: Cases = [
    [2, 5],
    [3, 13],
    [1, 1],
    [5, 41],
    [7000, 97986001],
    [8000, 127984001],
    [9999, 199940005],
    [9998, 199900013],
    [8999, 161946005],
    [100, 19801],
  ];

  test.each(cases)(
    "for n = %d output should be %d",
    (firstArg, expectedResult) => {
      const result = shapeArea(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
