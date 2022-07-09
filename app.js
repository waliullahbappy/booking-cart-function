// const firstClass = document.getElementById("first-class");
// const economyClass = document.getElementById("economy-class");

// const addFirstClassPrice = document.getElementById("add-first-class-price")
// const decreaseFirstClassPrice = document.getElementById("decrease-first-class-price")

// const addeconomyPrice = document.getElementById("add-economy-class-price")
// const decreaseeconomyPrice = document.getElementById("decrease-economy-class-price")

// const subTotal = document.getElementById("subtotal-price")
// const tax = document.getElementById("tax")

// let priceOfFirstClass = 150;
// let priceOfEconomyClass = 100;

// //first class ticket
// // addFirstClassPrice.addEventListener("click", () => {
// //     let firstClassTicketCount = parseInt(firstClass.value)
// //     firstClassTicketCount += 1
// //     firstClass.value = firstClassTicketCount
// //     total()
// // })

// // decreaseFirstClassPrice.addEventListener("click", () => {
// //     let firstClassTicketCount = parseInt(firstClass.value)
// //     if (firstClassTicketCount > 0) {
// //         firstClassTicketCount -= 1
// //         firstClass.value = firstClassTicketCount
// //     }
// //     total()
// // })

// addFirstClassPrice.addEventListener("click", () => ticketCount(firstClass, true))
// decreaseFirstClassPrice.addEventListener("click", () => ticketCount(firstClass, false))
// addeconomyPrice.addEventListener("click", () => ticketCount(economyClass, true))
// decreaseeconomyPrice.addEventListener("click", () => ticketCount(economyClass, false))

// function ticketCount(ticketClass, isIncrease){
//     let ticketClassTicketCount = parseInt(ticketClass.value)
//     if(isIncrease == true){
//         ticketClassTicketCount += 1;
//         ticketClass.value = ticketClassTicketCount
//     } else if (isIncrease == false && ticketClassTicketCount > 0) {
//         ticketClassTicketCount -= 1
//         ticketClass.value = ticketClassTicketCount
//     }

//     total()
// }

// // eocnomy class ticket
// // addeconomyPrice.addEventListener("click", () => {
// //     let economyTicketCount = parseInt(economyClass.value)
// //     economyTicketCount += 1
// //     economyClass.value = economyTicketCount
// //     total()
// // })

// // decreaseeconomyPrice.addEventListener("click", () => {
// //     let economyTicketCount = parseInt(economyClass.value)
// //     if (economyTicketCount > 0) {
// //         economyTicketCount -= 1
// //         economyClass.value = economyTicketCount
// //     }
// //     total()
// // })




// function total(){
//     let ticketCountForFirstClass = firstClass.value
//     let ticketCountForEconomyClass = economyClass.value

//     //subtotal
//     let subtotal = (priceOfFirstClass * ticketCountForFirstClass) + (priceOfEconomyClass * ticketCountForEconomyClass)

//     subTotal.textContent = "$" + subtotal 

//     //tax
//     let taxCount = (subtotal * 10) / 100;
//     taxCount = taxCount.toFixed(2)
//     tax.innerHTML = "$" + taxCount

//     //grandTotal
//     let grandTotal = (parseFloat(subtotal) + parseFloat(taxCount));
//     grandTotal = grandTotal.toFixed(2)
//     document.getElementById("grandTotal").innerText = "$" + grandTotal;

// }

// let  bookNow = document.getElementById("book")

// bookNow.addEventListener("click", ()=> {
//     document.querySelector(".form").style.display = "none";
//     document.getElementById("confirmation").style.display = "block";
// })

// First Class selection
const firstClass = document.getElementById('first-class');
const addFirstClassPrice = document.getElementById('add-first-class-price')
const decreaseFirstClassPrice = document.getElementById('decrease-first-class-price')

const subTotalPrice = document.getElementById('subtotal-price')
const vat = document.getElementById('tax')
const grandTotal = document.getElementById('grandTotal')


// economy Class Selection
const economyClass = document.getElementById('economy-class');
const addEconomyClassPrice = document.getElementById('add-economy-class-price');
const decreaseEconomyClassPrice = document.getElementById('decrease-economy-class-price')
// price defind
let priceOfFirstClass = 150;
let priceOfEconomyClass = 100;
// add event
addFirstClassPrice.addEventListener('click',function(){
    let firstClassTicketCount = parseInt(firstClass.value)
    firstClassTicketCount += 1
    firstClass.value = firstClassTicketCount;
    total();
})

    decreaseFirstClassPrice.addEventListener('click',()=>{
        let firstClassTicketCount = parseInt(firstClass.value)
        if(firstClassTicketCount>0){
            firstClassTicketCount -= 1
            firstClass.value = firstClassTicketCount
        }
        total()
       
    })


// Economy Class

addEconomyClassPrice.addEventListener('click',()=>{
const economyClass = document.getElementById('economy-class');
    let economyClassTicketCout = parseInt(economyClass.value)
    economyClassTicketCout += 1
    economyClass.value = economyClassTicketCout
    total()
})


decreaseEconomyClassPrice.addEventListener('click',()=>{
    let economyClassTicketCout = parseInt(economyClass.value)
    if(economyClassTicketCout > 0){
        economyClassTicketCout -= 1
        economyClass.value = economyClassTicketCout
    }
    total()
   
})

function total(){
    let ticketCountFirstClass = priceOfFirstClass * firstClass.value;
    let ticketCountEconmyClass = priceOfEconomyClass * economyClass.value;
    
    let subtotal = ticketCountFirstClass + ticketCountEconmyClass;
    subtotal = subtotal.toFixed(2)

    subTotalPrice.innerText = '$'+subtotal
    let vatPrice =(subtotal/100*10)
    vatPrice = vatPrice.toFixed(2)
    

    vat.innerText= '$'+vatPrice

    let totalPrice = (parseFloat(subtotal)  + parseFloat(vatPrice))
    totalPrice = totalPrice.toFixed(2)
        
    grandTotal.innerText = '$'+totalPrice


}


