const studentsBirthDays = students => {
    let result = {};


    let birthArray = [...students].map((student) => {
        let date = student.birthDate.split('/').reverse();
        [date[1], date[2]] = [date[2], date[1]];
        date = date.join(', ');
        student.birthDate = new Date(date);
        return student;
    })

    birthArray.sort((a, b) => a.birthDate > b.birthDate ? 1 : -1);

    for (let i = 0; i < birthArray.length; i++) {
        let month = birthArray[i].birthDate;
        month = (month + '').split(' ');
        let monthNumber = month[1] + '';
        if (!result.hasOwnProperty(monthNumber)) result[monthNumber] = [];
        result[monthNumber].push(birthArray[i].name);
    }

    return result;
}

const arr = [
    { name: 'Tom', birthDate: '02/15/2010' },
    { name: 'Ben', birthDate: '02/10/2010' },
    { name: 'Sam', birthDate: '06/15/2010' },
    { name: 'Sammy', birthDate: '02/14/2010' }
];
console.log(studentsBirthDays(arr));
console.log(arr);