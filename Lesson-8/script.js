function treeSum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number' && !isNaN(arr[i])) {
      sum += arr[i];
    } else if (typeof arr[i] == 'object' && arr[i] != null && arr[i].length) {
      sum += treeSum(arr[i]);
    }
  }

  return sum;
}
alert(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
