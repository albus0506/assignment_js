//1.
let email = "test@example.com"
if(email.lastIndexOf(".") - email.indexOf("@") >= 2){
    console.log("valid email!")
    }else{
        console.log("invalid email!")
    }

 


//  //2.
// let password = "khaliid55foworA"
// let passwordLastLetter = password.charAt(password.length-1).toUpperCase()
// let passwordFirstLetter = password.charAt(0).toLowerCase()
// let passwordNumber = password.includes(0)
// || password.includes(1) || password.includes(2) 
// || password.includes(3) || password.includes(4) 
// || password.includes(5) || password.includes(6) 
// || password.includes(7) || password.includes(8) || password.includes(9) 

// if(passwordFirstLetter && passwordLastLetter && passwordNumber){
//     console.log("strong password")
//     }else{
//         console.log("weak password")
//     }


// //3.
//     let url = "https://www.google.com"
//     let urlCheck = url.startsWith("http://") || url.startsWith("https://")
//     if(urlCheck){
//         console.log("valid url")
//         }else{
//             console.log("invalid url")
//         }
    

// //4.
// let name = "level"
// let nameCheck = name.split(",").reverse().join("")

// if(nameCheck === name){
//     console.log("name is a palindrome")
//     } else{
//         console.log("name is not a palindrome")
    
// }


// //5.
// let username = "teckwhiz"
// if(username.length >= 5 && username.length <= 15){
//     console.log("valid username")
// }else{
//     console.log("invalid username")
// }


// //6.
// let capitalName = "teckwhiz"
// let firstLetterToCapital = capitalName.charAt(0).toUpperCase()
// let remainingName = capitalName.slice(1)
// console.log(firstLetterToCapital.concat(remainingName))


//8.
let phone = "09134353647"
let remainingPhone = phone.slice(1)   
let country = "ghana".toLowerCase()
let result
let checks = phone.startsWith(0)
let checks2 = phone.length === 11
let checks3 = country

if(checks && checks2){
    if(checks3 === "Nigeria"){
        result = "+234".concat(remainingPhone)
    } else if(checks3 === "ghana"){
        result = "+233".concat(remainingPhone)
    }else if(checks3 === "USA"){
        result = "+1".concat(remainingPhone)
    }else{
        console.log("input valid country")
    }
}    
else{
    console.log("invalid phone number")
}

console.log(result)
