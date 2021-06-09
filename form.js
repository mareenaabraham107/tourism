function verifyPassword() {  
    var pw = document.getElementById("pwd").value;   
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }     
   else {  
       alert("Password is correct");  
    }  
  }  
      
function validateForm() {  
 
    var pw1 = document.getElementById("pwd1").value;  
    var pw2 = document.getElementById("pwd2").value;   
    var email = document.getElementById("email1").value;   
    var msg  = document.getElementById("message1").value;
    var phn = document.getElementById("phn").value;
    let regexp =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})?(.)$/
    var passw =  /^[A-Za-z]\w{7,14}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if((phn.length !=10)){
        document.getElementById("mge1").innerHTML = "**Only 10 digits"; 
    }
    else if(!(phn.match(phoneno))){
        document.getElementById("mge1").innerHTML = "**Enter only numbers in desired format"; 
        return false;
    }
    
    if(pw1 == "") {  
      document.getElementById("message1").innerHTML = "**Fill the password please!";  
      return false;  
    }      
 
    else if(pw2 == "") {  
      document.getElementById("message2").innerHTML = "**Enter the password please!";  
      return false;  
    }   
    else if(pw1.length < 8) {  
      document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
      return false;  
    }
    
    else if(pw1.match(passw) && pw2.match(passw)) { 
        alert('Correct')
    }
    else if(pw1 != pw2) {  
        document.getElementById("message2").innerHTML = "**Passwords are not same";  
        return false;  
      } 
    
    else if(!pw1.match(passw) && pw2.match(passw)){ 
        alert('Wrong, Password must contain atleast one uppercase, one lowercase and a number. Try another password')
        return false;
    }
    
    else {  
        alert ("Your password created successfully"); 
    }

    if(regexp.test(email)){
        alert("Valid email address!");
        return true;
    }
    else if(!regexp.test(email)){
        alert("Invalid email address!");
        return false;
    }
     
      
    }  


function CheckStrength(pw1){
var msg= document.getElementById("message1");
var passed = 3;

//Validation for Length of Password
if(passed > 2 && pw1.length > 8){
    passed++;
}

//Display of Status
var color = "";
var msg = "";
switch(passed){
    case 0:
        break;
    case 1:
        msg="Password is Weak.";
        color = "Red";
        break;
    case 2:
        msg ="Password is Good.";
        color = "orange";
        break;
    case 3:
        msg="Password is Strong.";
        color = "Green";
        break;

}
msg.innerHTML = msg;
msg.style.color = color;

}