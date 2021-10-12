function find_average(array) {
    var sum = 0;
    if (array.length == 0) { // check if array is empty
        sum = 0;
        return sum;
    } else {
        for (var i = 0; i < array.length; i++){ // Go through and calc total of array
            sum = sum + array[i];
        }
        return sum / array.length; // divide total by length to find average
    }
}

console.log(find_average([1,1,1])); // Return 1
console.log(find_average([1,2,3])); // Return 2
console.log(find_average([1,2,3,4])); // Return 2.5
console.log(find_average([])); // Return 0
console.log(find_average([46,6,71,36,27,24,71,64,1,59,63])); // Return 42.54545454545455
