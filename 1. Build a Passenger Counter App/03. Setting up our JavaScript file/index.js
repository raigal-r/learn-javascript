//document.getElementById("count").innerText = 5

//console.log(myAge)
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count) 

// let myAge = 26
// let humanDogRatio = 7
// let myDogAge = myAge*humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints);
// bonusPoints -= 75
// console.log(bonusPoints);
// bonusPoints += 45
// console.log(bonusPoints);

let countEl = document.getElementById("count") 
 //console.log(countEl)
let count = 0
let saveEl = document.getElementById("save-el")


function increment(){
    //console.log("The button was clicked")
    count += 1 
    countEl.textContent = count
    //console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0 
    countEl.textContent = count
    console.log(count)

} 





