function createStud(sName, sAge, sCP) {
 let sTemplate = {
 name: sName,
 age: sAge,
 points: sCP,
   
 birthYear() {
  let today = new Date();
  let year = today.getFullYear();
  return (year - this.age);
 },
   
 leapYear(){
  return this.birthYear()%4==0;
 },

 pp(){
   return (this.points / mCP) * mP - 3 * this.leapYear();
 },
   
 finalMark(){
  let currPoints = this.pp();
  if (currPoints >= 85) {
    return 5;
  }
  if (currPoints >= 60 && currPoints < 85) {
    return 4;
  }
  if (currPoints >= 40 && currPoints < 60) {
    return 3;
  }
  else {
    return 2;
  }
 }

 };
 return sTemplate;
}

let mCP;
let mP = 100;

mCP = prompt('Max current points');
let students = [];

while (confirm('Add student?')){
 let stud = createStud(prompt('Name'), prompt('Age'), prompt('current points')); 
 students.push(stud);
}

let pointsSum = 0;

for (let i = 0; i < students.length; i=i+1) { 
  console.log('Name '+students[i].name + ' Age '+ students[i].age + ' Current Points ' + students[i].points + ' Predicted Points ' + students[i].pp() + ' Final Mark ' + students[i].finalMark());
  pointsSum = pointsSum + parseInt(students[i].points);
}

console.log('Mid class points ' + pointsSum/students.length);