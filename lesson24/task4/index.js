export const studentsBirthDays = students => {
       let res = {};
       let birthArray = [...students].map((student) => {
         let date = student.birthDate.split('/').reverse();
         [date[1], date[2]] = [date[2], date[1]];
         date = date.join(', ');
         student.birthDate = new Date(date);
         return student;
     });

    birthArray.sort((a, b) => a.birthDate > b.birthDate ? 1 : -1);

    for (let i = 0; i < birthArray.length; i++) {
        let month = birthArray[i].birthDate;
        month = (month + '').split(' ');
        let monthNumber = month[1] + '';
        if (!res.hasOwnProperty(monthNumber)) result[monthNumber] = [];
        res[monthNumber].push(birthArray[i].name);
    }

    return res;
}
