
//Setup
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
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  
  for (var x=0; x<contacts.length; x++) {
    if (firstName == contacts[x].firstName && contacts[x].hasOwnProperty(prop) == true) {
        return contacts[x][prop];
    } 
    if (contacts[x].hasOwnProperty(prop) == false) {
      return "No such property";
    }
  }
  return "No such contact";
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "address");
