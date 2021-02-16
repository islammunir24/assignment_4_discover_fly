// document.getElementById('f-class-increase').addEventListener('click', function(){
//     const fClassInput = document.getElementById('f-class-count');
//     const fClassCount = parseInt(fClassInput.value);
//     const fClassNewCount = fClassCount + 1;
//     fClassInput.value = fClassNewCount;
//     const fClassTotal = fClassNewCount * 150;
//     document.getElementById('sub-total').innerText = '$' + fClassTotal;
// })
// document.getElementById('f-class-decrease').addEventListener('click', function(){
//     const fClassInput = document.getElementById('f-class-count');
//     const fClassCount = parseInt(fClassInput.value);
//     const fClassNewCount = fClassCount - 1;
//     fClassInput.value = fClassNewCount;
//     const fClassTotal = fClassNewCount * 150;
//     document.getElementById('sub-total').innerText = '$' + fClassTotal;
// })



// function handleFclassChange(isIncrease){
//     const fClassInput = document.getElementById('f-class-count');
//     const fClassCount = parseInt(fClassInput.value);
//     // const fClassNewCount = fClassCount - 1;
//     let fClassNewCount = fClassCount;
//     if(isIncrease == true){
//         fClassNewCount = fClassCount + 1;
//     }
//     if(isIncrease == false && fClassCount > 0){
//         fClassNewCount = fClassCount - 1;
//     }
//     fClassInput.value = fClassNewCount;
//     const fClassTotal = fClassNewCount * 150;
//     document.getElementById('first-class-price').innerText = 'First Class $' + fClassTotal;
// }

// function handleEclassChange(isIncrease){
//     const eClassInput = document.getElementById('e-class-count');
//     const eClassCount =parseInt(eClassInput.value);
//     let eClassNewCount = eClassCount;
//     if(isIncrease == true){
//         eClassNewCount = eClassCount + 1;
//     }
//     if(isIncrease == false && eClassCount > 0){
//         eClassNewCount = eClassCount - 1;
//     }
//     eClassInput.value = eClassNewCount;
//     const eClassTotal = eClassNewCount * 100;
//     document.getElementById('economy-class-price').innerText = 'Economy Class $' + eClassTotal;
// }


function handleTicketChange(ticket, isIncrease){
    // const classInput = document.getElementById(ticket + '-count');
    // const classCount =parseInt(classInput.value);
    const classCount = getInputValue(ticket);
    let classNewCount = classCount;
    if(isIncrease == true){
        classNewCount = classCount + 1;
    }
    if(isIncrease == false && classCount > 0){
        classNewCount = classCount - 1;
    }
    document.getElementById(ticket + '-count').value = classNewCount;
    let classTotal = 0;
    if (ticket == 'first'){
        classTotal = classNewCount * 150;
    }
    if (ticket == 'economy'){
        classTotal = classNewCount * 100;
    }
    // const classTotal = classNewCount * 100;
    document.getElementById(ticket + '-price').innerText = classTotal;
    calculateTotal()
}

function calculateTotal(){
    const firstClassCount = getInputValue('first')
    const economyClassCount = getInputValue('economy')

    const subTotalPrice =  firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const tax = subTotalPrice * 0.1;
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = subTotalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal
}

function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}