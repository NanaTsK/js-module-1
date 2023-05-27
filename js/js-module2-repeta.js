

//* ++++++++++++++++++++++++++++++++++++++++++++

//  How to find the common elements between two or more arrays

  function getCommonElements(array1, array2) {
  // Create an empty array to store the common elements
  let commonElements = [];

  // Iterate through each element of the first array
  for (let i = 0; i < array1.length; i++) {
    let currentElement = array1[i];

    // Check if the current element exists in the second array
    if (array2.includes(currentElement)) {
      // Add the common element to the commonElements array
      commonElements.push(currentElement);
    }
  }

  // Return the array containing the common elements
  return commonElements;
}
console.log( getCommonElements([1, 2, 3], [2, 4]) );
// повертає [2]
console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]) );
// повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


//* ++++++++++++++++++++++++++++++++++++++++++++




//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++
