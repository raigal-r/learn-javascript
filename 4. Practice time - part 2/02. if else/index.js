let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

if (age<6) {
    console.log("free")
}else if (6 <= age >= 17){
    console.log("child dicount")
}else if (18 <= age >= 26) {
    console.log("student discount")
}else if (27 <= age >= 66) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable