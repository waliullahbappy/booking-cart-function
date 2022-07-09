
// Selection
// First Class Selection
let firstClass = document.getElementById("first-class")
let addFirstClassPrice = document.getElementById("add-first-class-price")
let decreaseFirstClassPrice = document.getElementById("decrease-first-class-price")

// Economy Class Selection

let economyClass = document.getElementById("economy-class")
let addEconomyClassPrice = document.getElementById("add-economy-class-price")
let decreaseEconomyClassPrice = document.getElementById("decrease-economy-class-price")

// subtotal Selection
let subtotalPrice = document.getElementById("subtotal-price")

// Vat Selection
let vatInclude = document.getElementById("tax")
let grandTotal = document.getElementById("grandTotal")


// Default Value........................
 let firstClassPrice = 150
 let economyClassPrice = 100

// Function

// First Class Fuctionality
addFirstClassPrice.addEventListener('click',()=>{
    let increaseTicketCoutValue = parseInt(firstClass.value); 
    increaseTicketCoutValue += 1
    firstClass.value = increaseTicketCoutValue
    total()
 
})

decreaseFirstClassPrice.addEventListener('click',()=>{
    let decreaseTicketCoutValue = parseInt(firstClass.value)
    if(decreaseTicketCoutValue > 0){
        decreaseTicketCoutValue -= 1
    firstClass.value = decreaseTicketCoutValue
    }
    total()
    
})


// Economy Class Functionality

addEconomyClassPrice.addEventListener('click',()=>{
     let addEconomyClassTicketCount =parseInt(economyClass.value) 
     addEconomyClassTicketCount += 1
     economyClass.value = addEconomyClassTicketCount
     total()
})

decreaseEconomyClassPrice.addEventListener('click',()=>{
    let decreaseEconomyClassTicketCount = parseInt(economyClass.value)
    if(decreaseEconomyClassTicketCount > 0){
        decreaseEconomyClassTicketCount -= 1
    economyClass.value = decreaseEconomyClassTicketCount
    }
    total()
    
})


// Claculate the Value For Subtotal
function total(){
    let firstClassTotalValue = firstClassPrice * firstClass.value;
    // console.log(firstClassTotalValue);
    let economyClassTotalValue = economyClassPrice * economyClass.value;
    // console.log(economyClassTotalValue);


    // Subtotal Calculation

    let subtotal = firstClassTotalValue + economyClassTotalValue
    // console.log(subtotal);
    subtotal = subtotal.toFixed(2)
    subtotalPrice.innerText = '$'+subtotal


    // Vat Calculation
    vat = subtotal / 100*10
    vat = vat.toFixed(2)
    vatInclude.innerText = vat

    // Total Calculation

    let totalPrice = parseFloat(subtotal)  + parseFloat(vat)
    // console.log(totalPrice);
    totalPrice = totalPrice.toFixed(2)
    grandTotal.innerText = totalPrice


    
}

 