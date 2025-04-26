function isPalindrome (str) {
    const RevStr = [...str].reverse().join("");
    return str === RevStr;
}

console.log(isPalindrome('1231'));
