function isPalindrome(str){

    let isAutoMethod = false;

    while(isAutoMethod){
        const clearStr = str.toLowerCase();
        // const clearStr = str.toUpperCase();
        
        const reversedStr = clearStr.split('').reverse().join('');

        return clearStr == reversedStr;
    }

    while(!isAutoMethod){

        let leftIndex = 0;
        let rightIndex = str.length - 1;
        
        while(leftIndex < rightIndex){
            console.log('left')
            leftIndex++;
            rightIndex--;
        }

        return;
    }   
}

console.log(isPalindrome("malayalam"))