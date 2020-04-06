let students = [
    {name:'Tom', birthDate:'01/15/2010'},
    {name:'Ben', birthDate:'01/17/2008'},
    {name:'Sam', birthDate:'03/15/2010'},
]

export function studentsBirthDays(students) {
  const arr = students.slice().sort((a, b) => (new Date(b.birthDate)) - 
   (new Date(a.birthDate)));
   return arr;
};

console.log(studentsBirthDays(students));
