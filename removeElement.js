const insertIntoBST = (root, val) => {
	if (!root) {
  	root = new TreeNode(val);
  } else {
  	let currentNode = root;
    while(currentNode) {
    	if (currentNode.val < val) {
      	if (currentNode.right === null) {
        	currentNode.right = new TreeNode(val);
          break;
        } else {
        	currentNode = currentNode.right;
        }      	
      } else {
      	if (currentNode.left === null) {
        	currentNode.left = new TreeNode(val);
          break;
        } else {
	        currentNode = currentNode.left
        }
      }
    }
  }
  
  return root;
}
console.log(maxProfit([7,1,5,2,9,4]))


// let iterativeFunction = function (arr, x) {

//   let start = 0, end = arr.length - 1;

//   // Iterate while start not meets end
//   while (start <= end) {

//     // Find the mid index
//     let mid = Math.floor((start + end) / 2);

//     // If element is present at mid, return True
//     if (arr[mid] === x) return true;

//     // Else look in left or right half accordingly
//     else if (arr[mid] < x)
//       start = mid + 1;
//     else
//       end = mid - 1;
//   }

//   return false;
// }
