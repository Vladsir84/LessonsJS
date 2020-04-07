let students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function studentsBirthDays(students) {
    const arr = students.sort((a, b) => (new Date(a.birthDate)) -
        (new Date(b.birthDate)));
    const newObj = arr.reduce((acc, { name, birthDate }) => {
        const sortMonth = months[new Date(birthDate).getMonth()];
        console.log(sortMonth);
        return { ...acc, [sortMonth]: acc[sortMonth] ? acc[sortMonth].concat(name) : [name] };
    }, {});


    return newObj;
};

console.log(studentsBirthDays(students));
