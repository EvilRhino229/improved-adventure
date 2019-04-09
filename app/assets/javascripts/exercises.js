function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// console.log(fullName("Todd", "Howard"));

function isEven(number) {
  if (number !=0 && number % 2 === 0) {
    return "Hey, it's even"
  } else if (number === 0) {
    return "That's zero, it's TECHNICALLY even but don't be that guy dude"
  } else {
    return "Nope"
  }
}

// console.log(isEven(0));

function convertToFahrenheit(degrees) {
  return (degrees * 1.8 + 32);
}

// console.log(convertToFahrenheit(-21));