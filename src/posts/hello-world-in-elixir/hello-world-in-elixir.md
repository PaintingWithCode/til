---
  title: Hello world in Elixir
  date: '2023-06-05'
  topic: elixir
  isPublished: true
---

Create a new file named `hello.ex` and add the following Elixir code:

```elixir
defmodule HelloWorld do
  def hello do
    IO.puts("Hello, World!")
  end
end

HelloWorld.hello()
```

To compile and run the Elixir code, execute the following command from your terminal:
```shell
elixir hello.ex
```

