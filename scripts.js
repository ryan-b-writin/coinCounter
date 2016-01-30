
var coinPurse = {
  quarters : 0,
  dimes : 0,
  nickels : 0,
  pennies : 0
}

var amt;
var remainder = 0;
function coinCounter (amt) { 
  switch (true) {

    case (amt >= 25): 
      remainder = (amt % 25);
      amt = (amt - remainder);
      coinPurse.quarters = (amt / 25);
      amt = remainder;

    case (amt >= 10):
      remainder = amt % 10;
      amt = amt - remainder;
      coinPurse.dimes = amt / 10;
      amt = remainder;

    case (amt >= 5):
      remainder = amt % 5;
      amt = amt - remainder;
      coinPurse.nickels = amt / 5;
      amt = remainder;

    case (amt >= 1):
      remainder = amt % 1;
      amt = amt - remainder;
      coinPurse.pennies = amt / 1;
      amt = remainder;
    default:
      return coinPurse;
  }
}

var money = prompt("How many cents?");
coinCounter(money);

document.write("<p>Quarters:" +coinPurse.quarters +"</p>");
document.write("<p>Dimes:" +coinPurse.dimes +"</p>");
document.write("<p>Nickels:" +coinPurse.nickels +"</p>");
document.write("<p>Pennies:" +coinPurse.pennies +"</p>");






