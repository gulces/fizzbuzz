const isNumberDivisibleByThree = (integer) => {
 return integer % 3 == 0
}

const isNumberDivisibleByFive = (integer) => {
 return integer % 5 == 0
}

const fizzbuzz = (integer) => {
  let result = ""
  if (isNumberDivisibleByThree(integer)) {
    result += "fizz"
  }
  if (isNumberDivisibleByFive(integer)) {
    result += "buzz"
  }
  return result || integer
};

module.exports = {fizzbuzz}
