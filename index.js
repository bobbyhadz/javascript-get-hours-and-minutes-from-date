// EXAMPLE 1 - Get the Hours and Minutes from a Date in JavaScript

// ✅ get hours and minutes from the current Date
const now = new Date();

const hoursAndMinutes = now.getHours() + ':' + now.getMinutes();
console.log(hoursAndMinutes); // 👉️ 19:52

// ------------------------------------------------------------------

// // EXAMPLE 2 - Pad with a leading zero

// // ✅ Get hours and minutes from a specified Date
// function padTo2Digits(num) {
//   return String(num).padStart(2, '0');
// }

// const date = new Date('December 14, 2026 08:09:00');
// const hoursAndMinutes =
//   padTo2Digits(date.getHours()) +
//   ':' +
//   padTo2Digits(date.getMinutes());

// console.log(hoursAndMinutes); // 👉️ 08:09

// ------------------------------------------------------------------

// // EXAMPLE 3 - Define a reusable function

// function getHoursAndMinutes(date = new Date()) {
//   return (
//     padTo2Digits(date.getHours()) +
//     ':' +
//     padTo2Digits(date.getMinutes())
//   );
// }

// function padTo2Digits(num) {
//   return String(num).padStart(2, '0');
// }

// // ✅ Get hours and minutes from the current date
// const current = getHoursAndMinutes();
// console.log(current); // 👉️ 13:41

// // ✅ Get hours and minutes from the specified date
// const other = getHoursAndMinutes(
//   new Date('2023-04-27T08:30:10.820'),
// );
// console.log(other); // 👉️ 08:30

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Hours and Minutes from a Date using toLocaleTimeString

// const now = new Date();

// // 👇️ With PM / AM
// const hoursAndMinutes = now.toLocaleTimeString('en-US', {
//   hour: '2-digit',
//   minute: '2-digit',
// });

// console.log(hoursAndMinutes); // 👉️ 07:55 PM

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using different locales

// const now = new Date();

// const enUS = now.toLocaleTimeString('en-US', {
//   hour: '2-digit',
//   minute: '2-digit',
// });
// console.log(enUS); // 👉️ 01:47 PM

// const enGB = now.toLocaleTimeString('en-GB', {
//   hour: '2-digit',
//   minute: '2-digit',
// });
// console.log(enGB); // 👉️ 13:47

// const deDE = now.toLocaleTimeString('de-DE', {
//   hour: '2-digit',
//   minute: '2-digit',
// });
// console.log(deDE); // 👉️ 13:47
