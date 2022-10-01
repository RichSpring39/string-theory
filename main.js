//xify
function xify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += "x";
    }

    return newStr;
}

console.log(xify('hello'));
console.log(xify('hi there'));

//yellingChars
function yellingChars(str){
    let newStr = "";
    
    for(let i = 0; i < str.length; i++){
        newStr += str[i] + "i";
        // newStr += "!";
    }
    return newStr;
}
console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));

//indexdChar
function indexedChar(num){
    let newStr = "";

    for(let i = 0; i < num.length; i++){
        newStr += num[i]
        newStr += i;
    }
    return newStr;
}
console.log(indexedChar('hello'));
console.log(indexedChar('bye'));

//exclaim
function exclaim(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){

        if(str[i] === "?" || str[i] === "."){
            newStr += "!";
        }else {
            newStr += str[i];
        }

    }
    return newStr;
}
console.log(exclaim('What are you doing? are you a fool?'));
console.log(exclaim('this is fine.'));

function truncate(str){
    let newStr = "";

    for(let i = 0; i < 15; i++){
        newStr += str[i];
    }
    return newStr + "...";
}
console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));

//ciEmailify
function ciEmailify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            newStr += ".";
        }else{
            newStr += str[i];
        }
    }
    newStr += "@codeimmersives.com";
    return newStr.toLocaleLowerCase();
}
console.log(ciEmailify('colin jaffe '));
console.log(ciEmailify('Anthony DeRosa '));

//reverse 
function reverse(str){
    let newStr = "";
    for(let i = 0; i < str.length - 1; i++){
        if(str[i] === " "){
            newStr += ".";
        }else{
            newStr += str[i];
        }
    }
    newStr += "@codeimmersives.com ";
    return newStr.toLocaleLowerCase();
}
console.log(reverse('colin'));
console.log(reverse('mesuara'));

function onlyVowels(str){
    let newStr = "";

    for(i = 0; i < str.length; i++){
        if(str[i].toLocaleLowerCase() === "a" || str[i].toLocaleLowerCase() === "e" || str[i].toLocaleLowerCase() === "o" || str[i].toLocaleLowerCase() === "u" || str[i].toLocaleLowerCase() === "i"){
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(onlyVowels('colin jaffe'));
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa'));

