function sumAllNumers(...numbers) {
  return numbers.reduce((a, b) => a + Number(b), 0);
}

module.exports = sumAllNumers;