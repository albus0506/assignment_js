//1.
let email = "khalidfowora74@mail.com"
let validEmail = email.trim().toLowerCase().indexOf("@")
let slicedEmail = email.slice(validEmail)
if(email.includes(slicedEmail)){
    console.log("email is valid")
    }else{
        console.log("invalid email")
    }


 //2.
let password = "khaliid55foworA"
let passwordLastLetter = password.charAt(password.length-1).toUpperCase()
let passwordFirstLetter = password.charAt(0).toLowerCase()
let passwordNumber = password.includes(0)
|| password.includes(1) || password.includes(2) 
|| password.includes(3) || password.includes(4) 
|| password.includes(5) || password.includes(6) 
|| password.includes(7) || password.includes(8) || password.includes(9) 

if(passwordFirstLetter && passwordLastLetter && passwordNumber){
    console.log("strong password")
    }else{
        console.log("weak password")
    }

