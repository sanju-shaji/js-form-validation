var nam=document.getElementById("name")
var phone=document.getElementById("phone")
var password=document.getElementById("password")
var err1=document.getElementById("er1");
var err2=document.getElementById("er2");
var err3=document.getElementById("er3");
var sub=document.getElementById("sub")




var regexname=/^([a-zA-z]+)$/
var regexphone=/^([0-9]{10})$/
var regexpass=/^([a-zA-Z0-9]+)$/



function nameval(){
    if (regexname.test(nam.value)){
        err1.innerText="Valid format"
        err1.style.color="green"
        return true
        
    }
    else{
        err1.innerText="Enter alphabets alone"
        err1.style.color="red"
        return false
    }


}

function phoneval(){
    if (regexphone.test(phone.value)){
        err2.innerText="Valid format"
        err2.style.color="green"
        return true
        
    }
    else{
        err2.innerText="Enter numbers alone"
        err2.style.color="red"
        return false
    }


}


function passval(){
    if (regexpass.test(password.value)){
        err3.innerText="Valid format"
        err3.style.color="green"
        return true
        
    }
    else{
        err3.innerText="Enter numbers and alphabets alone"
        err3.style.color="red"
        return false
    }


}

function validate(){
    if (nam.value===""||phone.value===""||password.value===""){
        alert("Fields cannot be empty")
        return false
    }
    else{
        alert("Form submitted successfully")
        return true
    }
}