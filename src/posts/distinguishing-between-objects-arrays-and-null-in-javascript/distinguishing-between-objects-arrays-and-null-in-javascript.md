---
id: 62fdhBXm
title: Distinguishing between objects, arrays and null in JavaScript
date: '2023-06-07'
topic: javascript
isPublished: false
---

You're right, `typeof null` does indeed return `'object'` in JavaScript. To handle the case of `null`, you can include an additional check in your code. Here's an updated version that handles both arrays and objects, including the case of `null`:

```javascript
const variable = [1, 2, 3];

if (Array.isArray(variable)) {
  console.log('variable is an array');
} else if (variable !== null && typeof variable === 'object') {
  console.log('variable is an object');
} else {
  console.log('variable is neither an object nor an array');
}
```

In this modified code, we added an extra condition `variable !== null` to ensure that `null` is not considered as an object. This way, if the `variable` is `null`, it will not pass the second condition and will fall into the `else` block.

Now the code will output `'variable is an array'` if the `variable` is an array, `'variable is an object'` if it is an object (excluding `null`), and `'variable is neither an object nor an array'` for any other cases.