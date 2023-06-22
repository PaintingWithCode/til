---
id: MfprBZWH
title: New Immutable Array Methods in ES2023
date: '2023-06-22'
topic: javascript
isPublished: true
---
1. `with` changes an array element at a given index without modifying the original:
  ```javascript showLineNumbers
  const original = ['Hello', 'World'];
  const modified = original.with(1, 'There');

  console.log(original); // outputs: ['Hello', 'World']
  console.log(modified); // outputs: ['Hello', 'There']
  ```

2. `toSorted` and `toReversed` respectively sort and reverse an array without modifying the original:
  ```javascript showLineNumbers
  const original = [6, 4, 7];
  const sorted = original.toSorted();
  const reversed = original.toReversed();

  console.log(original); // outputs: [6, 4, 7]
  console.log(sorted);   // outputs: [4, 6, 7]
  console.log(reversed); // outputs: [7, 4, 6]
  ```

3. `toSpliced` inserts, changes and/or replaces elements in an array without modifying the original:
  ```javascript showLineNumbers
  const original = ['Jan', 'March'];
  const modified = original.toSpliced(1, 0, 'Feb');

  console.log(original);  // outputs: ['Jan', 'March']
  console.log(modified);  // outputs: ['Jan', 'Feb', 'March']
    ```
