# Make Array Consecutive

Ratiorg got `statues` of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 

Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by `1`. 

He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

---

### Example:

- For `statues = [6, 2, 3, 8]`, the output should be `makeArrayConsecutive(statues) = 3`.
- Ratiorg needs statues of sizes `4`, `5` and `7`.

### Input/Output:

- **[execution time limit]** 5 seconds (ts)


- **[input]** array.integer `statues`
  - An array of distinct non-negative integers.
  - Guaranteed constraints:
    - $1 \le statues.length \le 10$
    - $0 \le statues[i] \le 20$
 

- **[output]** integer
  - The minimal number of statues that need to be added to existing `statues` such that it contains every integer size from an interval `[L, R]` (for some `L`, `R`) and no other sizes.

---

### Solution:

- [Code](/src/arcade/intro/06-make-array-consecutive/make-array-consecutive.ts)
- [Tests](/src/arcade/intro/06-make-array-consecutive/test/make-array-consecutive.test.ts)
