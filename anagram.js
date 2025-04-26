function isAnagram(str1, str2) {
    if(str1.length == str2.length){
        const newStr1 = str1.split("").sort().join("");
        const newStr2 = str2.split("").sort().join("");
        return newStr1 == newStr2;
    }
    else {
        return false
    }
}

// Test cases
console.log(isAnagram('listen', 'silent'));  // true
console.log(isAnagram('hello', 'billion'));  // false
console.log(isAnagram('race', 'care'));      // true
console.log(isAnagram('abc', 'def'));        // false
