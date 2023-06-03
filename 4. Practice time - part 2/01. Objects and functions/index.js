// Create a person object that contains three keys: name, age, and county.

let person = {
    name: "Rachel",
    age: 25,
    county: "Narnia"
}

// Use yourself as an example to set the values for name, age, and country
function logData() {
    let sentence = person.name + " is " + person.age + " years old and lives in " + person.county
    console.log(sentence)
}
// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

logData()
// Call the logData() function to verify that it works