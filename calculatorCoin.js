const coinCombo = cents => {
    let response = []
    cents = amountOfQuarters(cents, response)
    cents = amountOfDimes(cents, response)
    cents = amountOfNickels(cents, response)
    response.unshift(cents)
    return response
}

const amountOfQuarters = (cents, arr) => {
    let count = 0
    while(cents -25 >= 0){
        count++
        cents -= 25
    }
    arr.push(count)
    return cents
}

const amountOfDimes = (cents, arr) => {
    let count = 0
    while(cents - 10 >= 0){
        count++
        cents -= 10
    }
    arr.unshift(count)
    return cents
}

const amountOfNickels = (cents, arr) => {
    let count = 0
    while(cents - 5 >= 0){
        count++
        cents -= 5
    }
    arr.unshift(count)
    return cents
}



console.log(coinCombo(1))