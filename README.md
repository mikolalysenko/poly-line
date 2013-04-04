# poly-line
Generates a polygonal line or curve from a sequence of vertices.

# Install

    npm install poly-line

# Example

```javascript
var polyLine = require("poly-line")

//Generate a path
console.log(polyLine([0,1,2,3]))

//Prints:
//
//    [[0,1], [1,2], [2,3]]
//

//Generate a cycle:
console.log(polyLine([0,1,2,3], true))

//Prints:
//
//    [[0,1], [1,2], [2,3], [3,0]]
//
```

## `require("poly-line")(vertices[, closed])`
Creates a polygonal line/cycle.

* `vertices` is the set of vertices to generate
* `closed` if set to true, then closes the polygonal curve

**Returns:** A list of cells representing the polygonal line

Credits
=======
(c) 2013 Mikola Lysenko. MIT License