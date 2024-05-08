let userName = "Andy"
let userAge = 45
//console.log("Text", variable) allows you to write to the console
console.log("User Name", userName)
console.log("User Age", userAge)
userName = "Andrew";
userAge = 21;
let userPets = ["Cat", "Dog"];
let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 6;
let daysSurvived = 0;
console.log("User Pets", userPets);
console.log("User Balance", userBalance);
console.log("Every Day Spending", EVERY_DAY_SPENDING);
console.log("Every Day Spending Per Pet", everyDaySpendingPerPet);
console.log("Days Survived", daysSurvived);
while (userBalance > 0) {
let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
userBalance -= spending
daysSurvived++
}
console.log("User have sufficient money for " + daysSurvived + " days")
userPets.pop();
everyDaySpendingPerPet = 2.4;
daysSurvived = 0; // Reset daysSurvived

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length;
    userBalance -= spending;
    daysSurvived++;
}
console.log("User have sufficient money for " + daysSurvived + " days with 2 pets");
