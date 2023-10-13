function change_Name(){
    document.getElementById("btnTest").innerText="Test Done"

}

function change_Color(){
    document.getElementById("dbl").style.color="red"
}
function change_Input_Color(){
    document.getElementById("focusEx").style.backgroundColor="red"
}

function change_Case(){
    let name=document.getElementById('blurEx').value;
   document.getElementById("blurEx").value=name.toUpperCase()

   
}