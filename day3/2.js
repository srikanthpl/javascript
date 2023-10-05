const student = {"name":"srikanth","id":20,"age":22}
console.table(student)
console.log(student.name) //Accessing object keys
student.name="Sanjay" //Updating the value
console.table(student)
delete student.age
console.table(student)
