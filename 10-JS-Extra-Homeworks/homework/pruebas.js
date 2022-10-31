let str2="The Henry Challenge is close!"
function inv(str){
    let newStr=""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr+=str[i]
        
    }
    return newStr.split(" ").reverse().join(" ")
}
console.log(inv(str2));