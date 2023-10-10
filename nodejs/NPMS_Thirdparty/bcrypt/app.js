import bcrypt from 'bcrypt'

let user={
    name:"SusilKumar",
    email:'susil@1234',
    password:'susilkarma',
    cc:'876543876'
    
}
let salt = bcrypt.genSaltSync(10);

let new_pass = bcrypt.hashSync(user.password,salt)
let new_cc = bcrypt.hashSync(user.cc,salt)

console.log(new_pass)
console.log(new_cc)

//spread coping
user={
    ...user,password:new_pass,cc:new_cc
}
console.log(user)

//comparing

let flag = bcrypt.compare("susilkarma",user.password)
if(flag){
    console.log("Login Successfull")
}else{
    console.log("Login Failed")
}