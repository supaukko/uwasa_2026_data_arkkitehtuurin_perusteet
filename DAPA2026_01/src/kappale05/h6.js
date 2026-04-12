import fs from "node:fs/promises";

const studentsJsonString = await fs.readFile("src/kappale05/data/students.json", "utf-8");
const students = JSON.parse(studentsJsonString);

const nameDaysJsonString = await fs.readFile("src/kappale05/data/nameDays.json", "utf-8");
const nameDays = JSON.parse(nameDaysJsonString);

const enrichStudentsWithNameDays = (students, namedays) => {
    return students.map(student => {
       const nameDay = namedays.find(nameDay => nameDay.name === student.firstName);
       return {...student, nameDay: nameDay ? nameDay.nameDay : null }
    })
}


const studentsWithNamedays = enrichStudentsWithNameDays(students, nameDays)
console.log(studentsWithNamedays)