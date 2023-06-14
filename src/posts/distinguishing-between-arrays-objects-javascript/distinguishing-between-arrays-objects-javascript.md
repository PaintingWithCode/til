---
id: 62fdhBXm
title: Distinguishing between arrays and objects in JavaScript
date: '2023-06-12'
topic: javascript
isPublished: true
---

Contrary to what you'd expect, `typeof [1, 2, 3]` returns `'object'` in JS.

If you need to distinguish between the two, for cases like dynamic component rendering from JSON in React, you'll need to use the following approach:

```javascript showLineNumbers
const variable = [1, 2, 3];

if (Array.isArray(variable)) {
  console.log('variable is an array');
} else if (typeof variable === 'object') {
  console.log('variable is an object');
}
```

For the dynamic rendering case, it's worth remembering that `typeof null` also outputs `'object'` and might need to be handled as well.