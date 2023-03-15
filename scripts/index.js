const val1 = document.getElementById('val1')
const val2 = document.getElementById('val2')
const val3 = document.getElementById('val3')
const statusDisplay = document.getElementById('statusDisplay')

const numbers = [val1,val2,val3]

const performArithmetics = () => {//anonymous function for readability
    const [firstNum, secondNum, thirdNum] = numbers.map(val => parseInt(val.value)) //creates an array of integers
    
    if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {//checks number validity
        statusDisplay.innerHTML = 'Please enter valid numbers.'
        return
    }
    
    const sortedNums = [firstNum, secondNum, thirdNum].sort((a, b) => a - b)
    const [low, median, high] = sortedNums
    const average = (sortedNums.reduce((acc, curr) => acc + curr, 0) / sortedNums.length).toFixed(2) //computes average fixed to 2 decimal places
    const range = high - low
    
    updateDisplay(high, low, median, average, range)
}

const updateDisplay = (high, low, median, average, range) => {//anonymous function for readability.
    statusDisplay.innerHTML = `
        High: ${high}, //template literal syntax
        Low: ${low}, 
        Median: ${median}, 
        Average: ${average}, 
        Range: ${range}`
}

