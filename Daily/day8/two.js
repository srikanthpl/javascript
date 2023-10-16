var guessNumber = document.getElementById("check_num")
var result = document.getElementById("result")
var randomnum = Math.floor(Math.random()*10)+1
console.log(randomnum);


function check(){
    var entered = guessNumber.value
    if(randomnum == entered)
    {
        console.log("Right");
        result.textContent = "YOU ARE RIGHT"
        alert("YOU ARE RIGHT")
    }
    else{
        console.log("Wrong");
        result.textContent = "YOU ARE WRONG"
        alert("YOU ARE WRONG")
    }
    
}