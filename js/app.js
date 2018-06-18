console.log("The javascript is loaded.");

// Q1. A light switch that can be either on or off.
// -Boolean
// Q2. A user's email address.
// -String
// Q3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// -Array
// Q4. A list of student names from our class.
// -Object
// Q5. A list of student names from our class, each with a location.
// -Object -Object
// Q6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// -Object -Object -Array

// Take it Easy
// Q1.
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "purple"];

// Q2.
console.log(rainbowColors[4]);

// Q3.
const jayEscala = {
	favoriteFood: "pizza",
	hobby: "basketball",
	town: "Chicago",
	favoriteDataType: "boolean"
}

// Q4.
console.log(jayEscala.hobby);

// Crazy Object!

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// Q1.
console.log(crazyObject.taco[1].salsa[5]);

// Q2.
console.log(crazyObject.larry.quotes[0]);

// Q3.
console.log(crazyObject.larry.characters[2].favourtieHobby);

// Q4.
console.log(crazyObject.larry.nicknames[1]);

// Q5.
console.log(crazyObject.larry.characters[1]);