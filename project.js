//1.
let email = "khalidfowora74@mail.com"
let validEmail = email.trim().toLowerCase().indexOf("@")
let slicedEmail = email.slice(validEmail)
if(email.includes(slicedEmail)){
    console.log("email is valid")
    }else{
        console.log("invalid email")
    }
