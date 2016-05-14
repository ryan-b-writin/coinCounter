# Coin Counter exercise

### How to use:

>On page load, a prompt will ask for a decimal number. The application then splits your amount into quarters, nickels, and dimes and prints your totals to the page.

#Original Assignment:

## Instructions

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

```js
/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  
  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();
```
