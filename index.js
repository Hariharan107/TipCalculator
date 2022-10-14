/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/
let billTotalInputDiv = document.getElementById('billTotalInput');
let tipInputDiv=document.getElementById('tipInput')
let numberOfPeopledDiv=document.getElementById('numberOfPeople')
let perPersonTotalDiv=document.getElementById('perPersonTotal')
// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

let noOfPerson=Number(numberOfPeopledDiv.innerText)

// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {

  let bill=Number(billTotalInputDiv.value);
  // console.log(bill);
  // get bill from user input & convert it into a number
  
 let tipPercent=Number(tipInputDiv.value)/100
//  console.log(tipPercent)
  // get the tip from user & convert it into a percentage (divide by 100)
  let tipAmt=tipPercent*bill
  // console.log(tipAmt)
  // get the total tip amount
  let totalAmt=tipAmt+bill;

//  console.log(totalAmt)
  // calculate the total (tip amount + bill)
  
  let noOfPeople=totalAmt/noOfPerson;
  // console.log(noOfPeople)
  // calculate the per person total (total divided by number of people)

  perPersonTotalDiv.innerText=`RS:${noOfPeople.toFixed(2)}`
  // update the perPersonTotal on DOM & show it to user

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people

  noOfPerson+=1;

  // update the DOM with the new number of people
   
  numberOfPeopledDiv.innerText=noOfPerson
  calculateBill()
  // calculate the bill based on the new number of people

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  if(noOfPerson<=1)
  return

  noOfPerson-=1;

  numberOfPeopledDiv.innerText=noOfPerson
  calculateBill()
  // decrement the amount of people


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}