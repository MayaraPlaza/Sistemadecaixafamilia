/* ## Sistema de gasto familiar

*/

let family = {
    incomes: [2000, 1600],
    expenses : [330, 350, 250, 100, 700, 100, 200, 70]
}

function sum (array){
let total = 0;

for(let value of array) {
    total += value
}

return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = " Negativo "

    if (itsOk){
        balanceText = " Positivo "
    }

    console.log(`Seu saldo é ${balanceText} : ${total}`)
}

calculateBalance()