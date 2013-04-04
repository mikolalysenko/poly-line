"use strict"

function polyLine(vertices, closed) {
  if(vertices.length == 0) {
    return []
  }
  var closed = !!closed
    , n = vertices.length
    , result = new Array(n - !closed)
  for(var i=0; i<n-1; ++i) {
    result[i] = [vertices[i], vertices[i+1]]
  }
  if(closed) {
    result[n-1] = [vertices[n-1], vertices[0]]
  }
  return result
}

module.exports = polyLine