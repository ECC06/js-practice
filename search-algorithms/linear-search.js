const names1 = ["James", "John", "Matthew"];

function linearSearch(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        if (target === arr[index]) {
            return index;
        }

    }
    return -1;
}

console.log(linearSearch(names1, "Matthew"));
