import { ispalindrome } from "./first.js"; //import file
//Quiz exercise
const quizQuestions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["1. Karachi", "2. Lahore", "3. Islamabad", "4. Quetta"],
    correctAnswer: 3,
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["1. Python", "2. JavaScript", "3. C++", "4. Java"],
    correctAnswer: 2,
  },
  {
    question: "What is the result of 2 + 2?",
    options: ["1. 3", "2. 4", "3. 5", "4. 6"],
    correctAnswer: 2,
  },
  {
    question: "In which year was JavaScript created?",
    options: ["1. 1990", "2. 1995", "3. 2000", "4. 2005"],
    correctAnswer: 2,
  },
];
let score = 0; // Initialize the score
for (let i = 0; i < quizQuestions.length; i++) {
  //Ask questions and check answers
  const currentQuestion = quizQuestions[i];
  const userAnswer = parseInt(
    prompt(currentQuestion.question + "\n" + currentQuestion.options.join("\n"))
  );

  if (userAnswer === currentQuestion.correctAnswer) {
    alert("Correct!");
    score++;
  } else {
    alert(
      "Wrong! The correct answer was " + currentQuestion.correctAnswer + "."
    );
  }
}
alert(
  "Quiz complete! Your final score is " +
    score +
    " out of " +
    quizQuestions.length +
    "."
);

//Regular expressions
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let email = "Alia@gsoftconsultig.com";
console.log(emailRegex.test(email)); // true
//Replacing
let text = "The sky is blue. The ocean is blue.";
let newText = text.replace(/blue/g, "green");
console.log(newText);
//promise and try catch finally
let myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation using setTimeout
  setTimeout(() => {
    let success = false; // Change to false to simulate an error
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed!");
    }
  }, 2000); // 2-second delay
});
myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("This will run no matter what!");
  });
//Asychronus function and use of await
async function showAvatar() {
  // read our JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
//CALL BACK AND EVENT LISTENER closures
function xyz() {
  let count1 = 0;
  document.getElementById("clickme").addEventListener("click", function () {
    console.log("Button clicked", ++count1);
  });
}
xyz();
//DOM Accessing elements of html
let header1 = document.getElementsByClassName("heading-class");
console.dir(header1);
console.log(header1);
let parag = document.getElementsByTagName("h1");
console.dir(parag);
console.log(parag);
let parag1 = document.querySelector("#clickme");
console.dir(parag);
console.log(parag);
let p_all = document.querySelectorAll(".heading-class");
console.dir(p_all);
console.log(p_all);
// Append the new paragraph to an existing div
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

const container = document.getElementById("container");
container.appendChild(newParagraph);
//Object-Oriented Programming (OOP)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
const person1 = new Person("Alice", 30); // Create an instance of the Person class
person1.greet();
//INHERITANCE
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class's constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

const employee1 = new Employee("hira", 25, "Developer");
employee1.greet();
employee1.work();
//closures
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
//events in js
let btn = document.querySelector("#click"); //access element
btn.onclick = () => {
  console.log("button clicked");
  btn.innerHTML = "Button clicked"; //change button text when clicked
};
//calling the other file function
const result = ispalindrome("alias");
console.log("ispalindrome:", result);
