let array = [1, 2, 3, 4, 5, 6];
let result = "";

for (let i = array.length; i >= 0; i--) {
    //console.log(array[i]);
    //process.stdout.write(array[i] + " ")
    result += array[i] + " ";
}

console.log(result);