let vaccineBooths = {
    A: [],
    B: [],
    C: [],
    D: []
}
/* 
A will have person with age 20-30 with temperature less than 100
B will have person with age 31-40 with temperature less than 100
C will have person with age 41-50 with temperature less than 100
D will have any range of age with temperature greater than equal 100
 */

function vaxTrail(personData) {
    for (let i of personData) {
        if (i.age >= 20 && i.age <= 30 && i.temperature < 100) {
            vaccineBooths.A.push(i);
        }
        else if (i.age >= 31 && i.age <= 40 && i.temperature < 100) {
            vaccineBooths.B.push(i);
        }
        else if (i.age >= 41 && i.age <= 50 && i.temperature < 100) {
            vaccineBooths.C.push(i);
        }
        else if (i.temperature >= 100) {
            vaccineBooths.D.push(i);
        }

    }
    return vaccineBooths;
}
console.log(vaxTrail([
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 }
]))