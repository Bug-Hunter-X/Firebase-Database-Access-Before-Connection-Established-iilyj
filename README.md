# Firebase Database Connection Race Condition

This repository demonstrates a common error when working with the Firebase Realtime Database: accessing database references before the connection is fully established.  This can lead to unexpected `null` or `undefined` values when attempting to retrieve data.

The `bug.js` file illustrates the problematic code.  The `bugSolution.js` file provides a corrected version that utilizes the `onAuthStateChanged` listener to ensure the database connection is ready before performing database operations.

## How to Reproduce

1. Clone this repository.
2.  Ensure you have the Firebase SDK installed and a properly configured Firebase project.
3. Run `bug.js`.  Observe the potential `null` value.
4. Run `bugSolution.js`. Observe the corrected behavior.

## Solution

The solution involves using Firebase's authentication state listener to ensure the database connection is established before attempting data access.  This avoids race conditions and ensures the database reference is available.