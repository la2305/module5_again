// bài tập làm thêm

// bài 1
const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  const prime = [2,3,4,5,6,7,8,9];
  const arrayPrime = prime.filter(element => isPrime(element));
  console.log(arrayPrime);
  
  
  // bài 2
  const person = {
    fisrtName: "john",
    lastName: "Doe",
    age: 30,
    gender: "male",
    occupation: "developer",
    nationality: "American",
    city: "New York",
    hobbies: ["reading", "traveling", "photography"],
    languages: ["english", "spanish"],
    education: {
      degree: "bachelor",
      major: "science biology",
      university: "hcmute",
    },
  };
  
  // Destructuring
  const { fisrtName, gender, languages, education } = person;
  const student1 = {
    fisrtName,
    gender,
    languages: languages[0],
    education: education.degree,
  };
  console.log(student1);
  // rest
  
  // spread
  const student2 = { ...person };
  console.log(student2);