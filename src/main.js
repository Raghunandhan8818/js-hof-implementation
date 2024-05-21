//Higher Order Funtion Implementations

// MAP Implementation

let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log("ARRAY", array)

let square = function (number) {
    return number * number
}

let map = function (array, callback) {
    const result = [];
    for (i = 0; i < array.length; i++) {
        result.push(callback(array[i]))
    }
    return result
}


let result = map(array, square)
console.log("Map Result", result)

// FILTER IMPLEMENTATION

let isDivisibleByTwo = function (number) {
    if (number % 2 === 0) {
        return number
    }
}

let filter = function (array, callback) {
    const result = [];
    for (i = 0; i < array.length; i++) {
        value = callback(array[i])
        if (value) {
            result.push(value)
        }
    }

    return result;

}

let filterResult = filter(array, isDivisibleByTwo)

console.log("Filter Result", filterResult)

//REDUCE IMPLEMENTATION

let reduce = function (array, callback, initialValue) {
    let result = initialValue
    for (i = 0; i < array.length; i++) {
        result = callback(result, array[i])
    }
    return result
}

let sum = function (sum, value) {
    return sum + value
}

let cubes = function (result, item) {
    result.push(item * item * item)
    return result
}

let reduceResult = reduce(array, sum, 10)
let reduceCubes = reduce(array, cubes, [])
console.log("Reduce Result", reduceResult)
console.log("Reduce Cubes Result", reduceCubes)

// For Each Implementation


let multiplyBySix = function (number) {
    console.log(number * 6)
}

let forEach = function (array, callback) {
    console.log("For Each Results")
    for (i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

let forEachResult = forEach(array, multiplyBySix)
