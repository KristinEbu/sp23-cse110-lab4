1. Line 12 prints `3` because the list `prices` has 3 items in it, meaning it has a length of 3 and the for loop changes the variable `i` according to the length of `prices`. Once `i` = 3, it's not less than the length of `prices` so the condition isn't met and it will exit the for loop. This is when line 12 prints the value of `i`. Also since `i` is a `var` variable, we don't have to worry about any type errors or scope errors.
2. Line 13 prints `150` because the last time the variable `discountedPrice` was changed was when `i` = 2 (because it was the last time `i` met the condition of the for loop). When `i` = 2, `prices[i]` = 300 and `discount` = 0.5 (the for loop doesn't affect this), so `discountedPrice` = 300 * (1 - 0.5), which is 150. So 150 was printed by Line 13 as it was after the for loop and wanted to print the value of `discountedPrice`. Also since `discountedPrice` is a `var` variable, we don't have to worry about any type errors or scope errors.
3. Line 14 prints `150` because the last time the variable `finalPrice` was changed was when `i` = 2 (because it was the last time `i` met the condition of the for loop). When `i` = 2, `prices[i]` = 300 and `discount` = 0.5 (the for loop doesn't affect this), so `discountedPrice` = 300 * (1 - 0.5), which is 150, and since 150 is already a whole integer, the next line for `finalPrice` will just provide the same value of 150. Thus, 150 was printed by line 14 as it was afterthe for loop and wanted to print the value of `finalPrice`. Also since `finalPrice` is a `var` variable we don't have to worry about any type errors or scope errors.
4. The function returns `discounted` = [50, 100, 150]. Since all of the variables in this function are declared with `var` it allows the variables to be changed and it doesn't matter if the values of these variables were changed in different scope blocks. So the function will be able to run without any effort, thus returned the discounted prices of the given input prices.
5. Line 12 gives a `ReferenceError: i is not defined` error because since `i` is defined with `let`, only the for loop has access to `i`. So when line 12 which is outside the for loop tries to access `i` it gives an error.
6. Line 13 gives a `ReferenceError: discountedPrice is not defined` error because since `discountedPrice` is defined with `let`, only the for loop as access to `discountedPrice`. So when line 13 which is outside the for loop tries to acces `discountedPrice` it gives an error.
7. Line 14 prints 150 because `finalPrice` is defined with `let` in the overall function scope. This allows the for loop and everything else in the function to have access to the value. The final value of `finalPrice` is 150 because of the reasons explained earlier.
8. The function returns `discounted` = [50, 100, 150] because `discounted` is only updated in the for loop which has access to `discountedPrice` and `i`. This means it has access to all the necessary variables to return the correct response. The values are [50, 100, 150] because of the reasons explained earlier.
9. Line 11 gives a `ReferenceError: i is not defined` because since `i` is defined with `let`, only the for loop has access to `i`. So when line 12 which is outside the for loop tries to access `i` it gives an error.
10. Line 12 prints 3 because the length of the list `prices` is 3. This `const` variable never gets updated, so it doesn't cause and error and just prints 3.
11. The function returns `discounted` = [50, 100, 150] since `discountedPrice` is declared within the foor loop, everytime it's updated it's like it's being redeclared instead of updated, thus `discountedPrice` "changing" in this case is ok. Also pushing items into a `const` array is allowed, so the correct return value is returned. The values are [50, 100, 150] because of the reasons explained earlier.
12. Given the Object, write the notation for:
    1.  `student.name`
    2.  `student['Grad Year']`
    3.  `student.greeting()`
    4.  `student['Favorite Teacher'].name`
    5.  `student.courseLoad[0]`
13. Arithmetic
    1. '32' because it concatenates '3' and the string equivalent of the integer 2 which is '2', thus resulting in '32'.
    2. 1 because you can't subtract strings so it assumes you want to subtract 2 from the integer 3 (which was converted from '3'), thus resulting in 1.
    3. 3 because it converts null to its integer value, 0, and 3 + 0 is 3.
    4. '3null' because it concatenates '3' and the string equivalent of the null object, thus resulting in '3null'.
    5. 4 because it converts true to its integer value, 1, and 1 + 3 is 4.
    6. 0 because it converts false to its integer value, 0, and it converts null to its integer value, 0, and 0 + 0 is 0.
    7. '3undefined' because it concatenates '3' and the string equivalent of the undefined object, thus resulting in '3undefined'.
    8. NaN because you can only subtract integers, so '3' becomes the integer 3, and undefined becomes its integer value, NaN, but you can't subtract NaN from 3, so it results in NaN.
14. Comparison:
     1.  true because using `>` assumes you're comparing integers and 2 is greater than 1.
     2.  false because using `>` assumes you're comparing integers and 2 is less than 12.
     3.  true because `==` will compare for equality after doing any necessary type conversions.
     4.  falase because `===` will compare for equality only if they're the same type and 2 and '2' is not the same type.
     5.  false because the integer value of true is 1 and 1 != 2.
     6.  true because Boolean(2) returns true since the parameter 2 doesn't actually compare anything, thus it's always true. And true and true is the same type (since we're using `===`) so it's true overall.
15. The difference between `==` and `===` is that `==` compares for equality after doing any necessary type conbersions. and `===` doesn't do type conversions, so it can only be true if they're the same type and value initially.
16. *see `part2-question16.js`*
17. The function returns [2, 4, 6]. In the for loop of `modifyArray` we push elements to `newArr` which doesn't affect the `const` aspect of it and it adds the returned value of `doSomething` with `array[i]`. `doSomething` doubles the parameter passed onto it so [2, 4, 6] is returned.
18. *see `part2-question18.js`*
19. The code outputs 1, 4, 3, 2.