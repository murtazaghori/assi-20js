// // 1. Power Function
// function power(a, b) {
//     return Math.pow(a, b);
// }

// // 2. Leap Year Function
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// // 3. Triangle Area Function
// function triangleArea(a, b, c) {
//     let S = (a + b + c) / 2;
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// // 4. Average and Percentage Function
// function average(marks) {
//     return marks.reduce((a, b) => a + b) / marks.length;
// }

// function percentage(marks) {
//     return (average(marks) / 100) * 100; // Assuming each subject is out of 100
// }

// function mainFunction() {
//     const marks = [80, 90, 85]; // Example marks
//     const avg = average(marks);
//     const perc = percentage(marks);
//     console.log(`Average: ${avg}, Percentage: ${perc}%`);
// }

// // 5. Custom indexOf Function
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// // 6. Remove Vowels Function
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiou]/gi, '');
// }

// // 7. Count Vowel Pairs Function
// function countVowelPairs(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//         const pair = text[i] + text[i + 1];
//         switch (pair.toLowerCase()) {
//             case 'aa':
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'ea':
//             case 'ee':
//             case 'ei':
//             case 'eo':
//             case 'eu':
//             case 'ia':
//             case 'ie':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'oo':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// // 8. Distance Conversion Functions
// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// // 9. Overtime Pay Calculation Function
// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked > 40) {
//         return (hoursWorked - 40) * 12;
//     }
//     return 0;
// }

// // 10. Currency Notes Calculation Function
// function calculateCurrencyNotes(amount) {
//     const hundred = Math.floor(amount / 100);
//     amount %= 100;
//     const fifty = Math.floor(amount / 50);
//     amount %= 50;
//     const ten = Math.floor(amount / 10);
//     return { hundred, fifty, ten };
// }
// // Example usage
// // console.log(power(2, 3)); // 8
// // console.log(isLeapYear(2020)); // true
// // console.log(triangleArea(3, 4, 5)); // 6
// // mainFunction(); // Average and Percentage
// // console.log(customIndexOf("Hello", "e")); // 1
// // console.log(removeVowels("Hello World")); // Hll Wrld
// // console.log(countVowelPairs("Pleases read this application and give me gratuity")); // 3
// // console.log(toMeters(1)); // 1000
// // console.log(toFeet(1)); // 3280.84
// // console.log(toInches(1)); // 39370.1
// // console.log(toCentimeters(1)); // 100000
// // console.log(calculateOvertimePay(45)); // 60
// // console.log(calculateCurrencyNotes(370)); // { hundred: 3, fifty: 1, ten: 2 }


// function main(){
//     alert("welcome visitor")
// }
//  function picture(){
//     Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//       });
// }
// var counter = 0; // Initial counter value
    
//             function increaseCounter() {
//                 counter++; 
//                 updateCounterDisplay();  
//             }
    
//             function decreaseCounter() {
//                 counter--; 
//                 updateCounterDisplay();  
//             }
    
//             function updateCounterDisplay() {
//                 document.getElementById("counterValue").innerText = counter;  
//             }