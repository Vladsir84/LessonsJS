let students = [
    {name:'Tom', birthDate:'01/15/2010'},
    {name:'Ben', birthDate:'01/17/2008'},
    {name:'Sam', birthDate:'03/15/2010'},
]

export function studentsBirthDays(students) {
  const arr = students.slice().sort((a, b) => (new Date(a.birthDate)) - 
   (new Date(b.birthDate)));
   return arr;
};

console.log(studentsBirthDays(students));
