const number = [1, 2, 5, 7, 8, 9, 15];

const filteredNumbers = number.filter((number) => number > 6);
const filteredNumbers1 = number.filter((number) => number !== 7);

console.log(number);
console.log(filteredNumbers);
console.log(filteredNumbers1);

const jobs = [
  { title: "jtcareers", organization: "Microsoft" },
  { title: "programmer", organization: "Google" },
  { title: "developer", organization: "Microsoft" },
];

const filteredJobs = jobs.filter((job) => job.organization !== "Microsoft");
console.log(filteredJobs);
