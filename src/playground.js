const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish", "Carrot"];

const fruitveggie = [...fruits, ...vegetables];

console.log(fruitveggie);

const developer = {
  salary: 100000,
  techStack: ["Vue", "CSS", "HTML"],
  experience: 4.5,
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

console.log(developer);
console.log(developer.salary);
console.log(developer.lookingForWork);
console.log(developer.techStack[1]);

developer.doubleSalary();
console.log(developer.salary);
console.log(developer.lookingForWork);

export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
