var polyLine = require("../poly_line.js")

require("tap").test("poly-line", function(t) {
  
  function eq(a,b) {
    return t.equals(a.join(), b.join())
  }
  eq(polyLine([0,1,2,3]), [[0,1], [1,2], [2,3]])
  eq(polyLine([0,1,2,3],true), [[0,1], [1,2], [2,3], [3,0]])
  eq(polyLine([]), [])
  eq(polyLine([], true), [])
  eq(polyLine([0]), [])
  eq(polyLine([0], true), [[0,0]])

  t.end()
})