---
  title: Hello world in Go
  date: '2023-06-06'
  topic: go
  isPublished: true
---
Create a new file named `hello.go` and add the following Go code:

```go showLineNumbers
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

To run the code, you can use `go run`
```shell
go run hello-world.go
```

Sometimes we’ll want to build our programs into binaries. We can do this using `go build`
```shell
go build hello-world.go
```

We can then execute this binary directly:
```shell
./hello-world
```