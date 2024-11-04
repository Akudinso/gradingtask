function chunkArray(array, size) {
    const chunkedArray = [];

    let index = 0;

    // Step 3: Loop through the original array as long as the index hasn't reached the end
    while (index < array.length) {
        // Step 4: Extract a chunk of the desired size from the original array
        const chunk = array.slice(index, index + size);
        
        // Step 5: Add the extracted chunk to the chunkedArray
        chunkedArray.push(chunk);

        // Step 6: Move the index forward by the chunk size to get the next chunk
        index += size;
    }

    // Step 7: Return the final array of chunks
    return chunkedArray;
}

// Example usage
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunkArray([1, 2, 3, 4, 5], 2));       // Output: [[1, 2], [3, 4], [5]]



function ChunkedArray(arr, size) {
    let chunkArray = [];
    let index = 0;
    while (index < arr.length) {
        const chunk = arr.slice(index, index + size)
        chunkArray.push(chunk);
        index += size;
        
    }
    return chunkArray;
}

console.log(chunkArray([7, 8, 9, 4, 5, 6, 7], 3)); 
console.log(chunkArray([9, 6, 3, 4, 5], 2));  

