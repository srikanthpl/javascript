let user =[{EId:101,Ename:"Saran",Esal:45000},
{EId:102,Ename:"Sajay",Esal:65000},
{EId:103,Ename:"Sanjay",Esal:400000}
]

function loading(){

    let rows=""
    for (users of user){
        rows += `<tr><td>${users.EId}</td>
        <td>${users.Ename}</td>
        <td>${users.Esal}</td></tr>`
    }

 document.getElementById("disp").innerHTML=rows
   


}