// 陣列陣列     0, 1, 2, 3, 4, 5, 6, 7
// 費氏數列     0, 1, 1, 2, 3, 5, 8, 13
// 第幾個個     1, 2, 3, 4, 5, 6, 7, 8

function fibonacci(position) {
  const result = [0, 1];

  for (let index = 2; index <= position; index++) {
    // 倒數第一個數
    const a = result[index - 1]; // or result[result.length -1]

    // 倒數第二個數
    const b = result[index - 2];

    result.push(a + b);
  }
  console.log('full array: ' + result)
  console.log('last number: ' + result[result.length - 2])
  return result[result.length - 1];
}