function lngstCmmnSeq(s1, s2) {
    let str1Changing = s1;
    let str2Changing = s2;
    let result1 = [];
    let result2 = [];
    let arr1 = s1.split('');
    let arr2 = s2.split('');
    
    for (let i = 0; i < arr1.length; i++) {
        const letter = arr1[i];
        if(str2Changing.indexOf(letter) > -1){
            result1.push(letter);
            str2Changing = str2Changing.slice(str2Changing.indexOf(letter));
        }

    }
    for (let i = 0; i < arr2.length; i++) {
        const letter = arr2[i];
        if(str1Changing.indexOf(letter) > -1){
            result2.push(letter);
            str1Changing = str1Changing.slice(str1Changing.indexOf(letter));
        }
        
    }
    if (s1.indexOf(s2) > -1) {
        return s2;
    } else if (s2.indexOf(s1) > -1){
        return s1;
    } else if(result1.length > s1.length){
        return result2.toString().split(',').join('');
    }else if(result1.length >= result2.length){           
        return result1.toString().split(',').join('');
    } else {
        return result2.toString().split(',').join('');
    }
}

console.log(lngstCmmnSeq("ABBA", "ABCABA"));//"ABBA"
console.log(lngstCmmnSeq("ABAZDC", "BACBAD"));//"ABAD"
console.log(lngstCmmnSeq("AGGTAB", "GXTXAYB"));//"GTAB"
console.log(lngstCmmnSeq("aaaa", "aa"));//"aa"
console.log(lngstCmmnSeq("", "..."));//""