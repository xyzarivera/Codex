/*

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    let x = null; 
    for (var i = 0; i < contacts.length; i++) {
        console.log(i)
        // console.log(contacts[i].firstName)
        if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)){
            x = contacts[i][prop]; 
            break;
        } else if (name === contacts[i].firstName && !contacts[i].hasOwnProperty(prop)) {
            x = "No such property"
            break;
        } else if (name !== contacts[i].firstName) {
            x = "No such contact"
        } 
    }
    return x
// Only change code above this line
}


console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));

/*
lookUpProfile("Kristian", "lastName") should return the string Vos
lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") should return an array
lookUpProfile("Bob", "potato") should return the string No such contact
lookUpProfile("Akira", "address") should return the string No such property
*/