Write a function that splits an array into two groups, first group should have starting arguments equal to the size in an array, and second group have rest of the elements in an array, returns them as a two-dimensional array.

**Example**
-   chunkyMonkey(["a", "b", "c", "d"], 2) should return [ ["a", "b"], ["c", "d"] ].
-   chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [ [0, 1, 2, 3], [4, 5]].

**Hints**
-   slice()