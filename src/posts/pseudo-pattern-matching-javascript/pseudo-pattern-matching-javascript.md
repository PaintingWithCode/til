---
id: KQ657ydj
title: Pseudo pattern matching in JavaScript
date: '2023-07-26'
topic: javascript
isPublished: true
---
One of my favourite parts of Elixir is the pattern matching. Here's an example:
```elixir showLineNumbers
def weather_advisory(temperature) when temperature >= 100 do
  "Scorching hot! Stay hydrated and find shade."
end

def weather_advisory(temperature) when temperature >= 50 do
  "Pleasant weather. Enjoy the day!"
end

def weather_advisory(_temperature) do
 "Chilly. Grab a jacket before going out."
end
```

By inverting a `switch` statement it's possible to implement something similar in Javascript:
```javascript showLineNumbers
function weatherAdvisory(temperature) {
  switch(true) {
    case temperature >= 100:
      return "Scorching hot! Stay hydrated and find shade."

    case temperature >= 50:
      return "Pleasant weather. Enjoy the day!"

    default:
      return "Chilly. Grab a jacket before going out."
  }
}
```
While this is a relatively simple use-case and could be replaced with if/else blocks, I've found this approach to provide better clarity of the conditional logic.