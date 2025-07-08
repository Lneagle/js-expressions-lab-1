//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

function convertToF(temp) {
    return (temp * 9 / 5) + 32;
}

function convertToC(temp) {
    return (temp - 32) * 5 / 9;
}

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

let tot_temperature_in_celsius = convertToC(day1TempF) + day2TempC + convertToC(day3TempF) + day4TempC + convertToC(day5TempF) + day6TempC + convertToC(day7TempF) + day8TempC + convertToC(day9TempF) + day10TempC + convertToC(day11TempF) + day12TempC + convertToC(day13TempF) + day14TempC + convertToC(day15TempF) + day16TempC + convertToC(day17TempF) + day18TempC + convertToC(day19TempF) + day20TempC + convertToC(day21TempF) + day22TempC + convertToC(day23TempF) + day24TempC + convertToC(day25TempF) + day26TempC + convertToC(day27TempF) + day28TempC + convertToC(day29TempF) + day30TempC;

let tot_temperature_in_fahrenheit = day1TempF + convertToF(day2TempC) + day3TempF + convertToF(day4TempC) + day5TempF + convertToF(day6TempC) + day7TempF + convertToF(day8TempC) + day9TempF + convertToF(day10TempC) + day11TempF + convertToF(day12TempC) + day13TempF + convertToF(day14TempC) + day15TempF + convertToF(day16TempC) + day17TempF + convertToF(day18TempC) + day19TempF + convertToF(day20TempC) + day21TempF + convertToF(day22TempC) + day23TempF + convertToF(day24TempC) + day25TempF + convertToF(day26TempC) + day27TempF + convertToF(day28TempC) + day29TempF + convertToF(day30TempC);

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};