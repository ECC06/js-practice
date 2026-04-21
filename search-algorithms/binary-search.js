const names2 = ["James", "Matthew", "John"];

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (target === arr[middle]) {
            return middle;
        } else if (target < arr[middle]) {
            end = middle - 1;
        } else if (target > arr[middle]) {
            start = middle + 1;
        }
    }
}

console.log(binarySearch(names2, "Matthew")); //=> 2
