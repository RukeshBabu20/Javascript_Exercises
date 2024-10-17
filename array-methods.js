
// ARRAY - 1

function findMaxNumber(arr, method){
    // console.log(arr);
    // console.log(...arr);
    // console.log(method) // if not passed as argument, will take as undefined.
    let result=''
    switch (method){
        case "manual":
            max = 0;
            for(i=1; i<=arr.length; i++){
                if(arr[i] > max){
                    max = arr[i]
                }
            }
            result = max;
            break
        case "auto":
            result = Math.max(...arr);
            break
        case "default":
            result=''
            break
    }
    return result
}
// console.log(findMaxNumber([1,4,5,6,8,11,10], "manual"))



//-----------------------------------------  ARRAY -2
function returnOnlyEven(arr,method){

    let result = [];

    switch (method) {
        case "manual":
            final_values = [];

            for(let i=0; i<arr.length; i++){
                if(arr[i] % 2 === 0){
                    final_values.push(arr[i])
                }
            }
            result = final_values;
            break;
        case "auto":
            result = arr.filter((number)=> number % 2 == 0)
            break;
    }
    return result;
}
console.log(returnOnlyEven([1,4,5,7,8,3,2,1], "manual"));
