import { arrayChange, Input, Output } from "../array-change";

type Cases = [Input, Output][];

describe("Array Change", () => {
  const cases: Cases = [
    [[1, 1, 1], 3],
    [[-1000, 0, -2, 0], 5],
    [[2, 1, 10, 1], 12],
    [[2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15], 13],
    [[3122, -645, 2616, 13213, -8069], 25559],
    [
      [
        -787, -773, -93, 867, -28, 118, 372, 255, 355, 598, -179, -752, 794,
        961, -84, 296, -714, 14, 666, -265, -905, 942, -691, -379, -698, -650,
        637, 523, 709, -674, 574, -239, 805, -434, 597, -677, 664, 384, 726,
        -389, -387, 772, -603, 685, 249, 446, -631, 454, 983, 867, -158, 932,
        -440, 891, -12, 400, -916, 503, 185, -802, -255, 207, -952, -506, -689,
        425, 747, -907, -30, 102, 553, 981, -664, 75, -957, -42, 99, -750, -277,
        686, -884, -972, 470, 32, 439, 163, 887, 895, -555, -654, 793, 333, 143,
        73, 181, -512, -915, -68, 542, 799,
      ],
      89510,
    ],
    [
      [
        -28943, -29728, -24726, -15090, -2555, -9551, -11025, 36442, -23240,
        -46093, 48516, 44580, -21573, 39172, -38017, -19354, -13460, 38212,
        -35646, -22288, 36832, -33115, 39055, -15935, -19300, -10419, -18548,
        21742, -32032, 27988, -45323, 27454, -5683, -14209, -4168, 51188, 45552,
        9899, 49241, -25939, -8344, -25788, 6808, 6931, 6145, -30802, -518,
        -42362,
      ],
      2020705,
    ],
    [
      [
        9796, 1283, -2825, 3870, -6727, -8616, -10191, -7727, 7074, 1580, -4583,
        162, 2980, -3861, 9452, 8145, 1222, -1125, 5142, -5657, -974, -986,
        -9627, 5244, 8866, 3336, -9946, -5271, 10582, 3013, 8030, 4471, -3420,
        9496, -3533, -8030, 10007, 2549, -8195, 7119, 302, -5322, -3537, 209,
        -8134, -9176, 6336, -1771, 9851, 3644, 9629, -2603, 3988, 10579, 2221,
        1101, 1465, 5002, -6203, -8864, 596, 6005, 4554, 8526, 2178, -5447,
        -232, -9734, 7402, -3984, -7161, -2139, -3181, 10445, 4535, 6926, 7156,
      ],
      737073,
    ],
    [
      [
        -24875, -6401, 58256, 44456, 2244, -25333, -42389, -5975, 7650, -46343,
        -62011, -55366, 7802, -37699, 15461, 13309, -58664, 54557, 56324,
        -34397, -33024, -21934, -18861, -23196, 56542, -63986, 59833, -45610,
        -16948, 399, -7405, 54701, -57348, -32627, 65534, 615,
      ],
      2199614,
    ],
  ];

  test.each(cases)(
    "for inputArray = %j output should be %d",
    (firstArg, expectedResult) => {
      const result = arrayChange(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
