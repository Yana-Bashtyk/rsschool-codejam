function sumOfOther(arr) {
    const arrSum = arr.reduce((a,b) => a + b);
    return arr.map((elem) => arrSum - elem);
}