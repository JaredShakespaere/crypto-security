const { Cipher } = require("crypto")

textData= ['a','b', 'c', 'd', 'e', 'f','g','h','i','j','k','l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// letters= textData.split(',')

code= []

function cipher(letters){
    for(let i = 0; i< letters.length; i++){
        if(letters[i] === 0){
            letters[i]++
        }
    }
}

console.log(cipher('a'))