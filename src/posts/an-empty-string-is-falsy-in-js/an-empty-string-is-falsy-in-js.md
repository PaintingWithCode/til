---
  title: An empty string is falsy in JS
  date: '2023-06-06'
  topic: javascript
  isPublished: true
---

Instead of using `aString.length > 0` to verify if a string has a valid value, you can use the string as the conditional itself. 

This is due to an empty string `''` being considered falsy in JS:

```javascript showLineNumbers
function isNotEmpty(aString) {
  return Boolean(aString)
}

isNotEmpty('Hello, World!') // outputs: true
isNotEmpty('') // outputs: false
```

The other falsy values in JS are:
1. `false`
2. `null`
3. `undefined`
4. `0`
5. `NaN`