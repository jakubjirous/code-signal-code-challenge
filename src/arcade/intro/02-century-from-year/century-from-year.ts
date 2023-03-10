export type Input = number;
export type Output = number;

/**
 * Given a year, return the century it is in.
 * The first century spans from the year 1 up to and including the year 100,
 * the second - from the year 101 up to and including the year 200, etc.
 * @param year
 */
export const centuryFromYear = (year: Input): Output => {
  return Math.ceil(year / 100);
};
