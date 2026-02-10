//Week 3 exercise
function addNums(...nums) {
	let total = 0;

	for (let index = 0; index < nums.length; index++) {
		total += nums[index];
	}

	console.log(total);
}

addNums(1, 2, 3);
