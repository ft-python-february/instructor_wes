var arr = [12, "string", [1, 2, 3, [10, 4]], {hairColor: "brown"}];

arr[2] = "this was an array before";

arr.push("new value");
arr.pop();

console.log(arr);

