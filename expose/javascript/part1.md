1. Line 9 prints `values added:  20`
2. Line 13 prints `final result:  20`
3. Line 9 prints `values added:  20`
4. Line 13 gives a `ReferenceError: result is not defined` error because `let` only allows the variable to accessed within its block scope, which in this case is the `if (add)` statement. Since line 13 is outside the if statement, it doesn't have access to the `result` variable thus causing an error when trying to access it.
5. Before line 9 can be read, line 7 gives a `TypeError: Assignment to constant variable` because `const` prevents its variable from being reassigned, and line 7 tries to change the `result` variable which was declared with `const`.
6. Before line 13 can be read, line 7 gives a `TypeError: Assignment to constant variable` for the same reason as mentioned in #5.