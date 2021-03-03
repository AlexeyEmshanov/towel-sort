
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if ( ((i+1) % 2 > 0) ) {
         result.push(matrix[i].sort((a, b) => a - b))
      } else {
         result.push(matrix[i].sort((a, b) => -(a - b)))
      }
    }
  }
  
  return result.flat()
}
