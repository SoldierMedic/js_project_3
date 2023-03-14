const val1 = document.getElementById('val1')
const val2 = document.getElementById('val2')
const val3 = document.getElementById('val3')
const statusDisplay = document.getElementById('statusDisplay')

const numbers = []
const performArithmetics(){
    numbers[0] = parseInt(val1.value)
    numbers[1] = parseInt(val2.value)
    numbers[2] = parseInt(val3.value)
    numbers.sort()
    var high = numbers[2]
    var low = numbers[0]
    var median = numbers[1]
    var average = numbers.reduce((acc, curr) => acc + curr, 0)/2;
    var range = numbers[2]-numbers[0]
    updateDisplay(high, low, median, average, range)
}


function updateDisplay(high,low,median,average,range){
    statusDisplay.innerHTML = `High: ${high}, Low: ${low}, Median: ${median}, Average: ${average}, Range: ${range}`
}