function increaseBalance(x, y) {
  x += y; // x = x + y
  return x;
}

function decreaseBalance(x, y) {
x -= y; // x = x - y
return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y; // x = x / y
  return x;
  console.log("x");
}

function getRestAfterDivision(x, y) {
  x %= y; // x = x % y
  return x;
}

function getPreIncrement(x, y) {
  y = ++x;
  return y;
}

function getPostIncrement(x, y) {
  y = x++;
  return y;
}

function getPreDecrement(x, y) {
  y = --x;
  return y;
}

function getPostDecrement(x, y) {
  y = x--;
  return y;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(getPreIncrement(100, 10));
console.log(getPostIncrement(100, 10));
console.log(getPreDecrement(100, 10));
console.log(getPostDecrement(100, 10));