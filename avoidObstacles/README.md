### Minimum length of jumps to avoid given array of obstacles
We are given coordinates of obstacles on a straight line. We start jumping from point 0, we need to reach end avoiding all obstacles. Length of every jump has to be same (For example, if we jump from 0 to 4, then we must make next jump from 4 to 8). We need to find the minimum length of jump so that we can reach end and we avoid all obstacles.  
Examples:  

Input : obstacles = [5, 3, 6, 7, 9]  
Output : 4  

Obstacles are at points 3, 5, 6, 7 and 9
We jump from 0 to 4, then 4 to 8, then 4
to 12. This is how we reach end with jumps
of length 4. If we try lower jump lengths,
we cannot avoid all obstacles.

Input : obs[] = [5, 8, 9, 13, 14]
Output : 6

**Hints**
-   sort()
-   every()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

Non-empty array of positive integers.

*Guaranteed constraints:*

2 ≤ inputArray.length ≤ 10,

1 ≤ inputArray[i] ≤ 40.

- **[output] integer**

The desired length.
