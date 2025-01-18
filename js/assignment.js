"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];



function findSmallestNumber() {
    const smallest = Math.min(...myNumbers);
    console.log(smallest);
    smallestNumberElement.textContent = smallest;
}

function findLargestNumber() {
    const largest = Math.max(...myNumbers);
 console.log(largest);
    largestNumberElement.textContent = largest;
}

function findAverageNumber() {
    const average = myNumbers.reduce((acumulator, current) => acumulator + current, 0) / myNumbers.length;
    console.log(average);
    averageNumberElement.textContent = average;
// let sum = 0;
// for (let i=0 ; i<myNumbers.length ; i++){
//     sum += myNumbers[i];
// }
// let average = sum / myNumbers.length;
// return average;
}


function render(){
    findSmallestNumber();
    findLargestNumber();
    findAverageNumber();
}

submissionBtn.addEventListener("click", function ()  {
  render();
});




