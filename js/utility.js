function getAmountInputId(id){
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    return inputNumber;
}
function getTotalAmountId(id){
    const totalAmount = document.getElementById(id).innerText;
    const totalAmountNumber = parseFloat(totalAmount);
    return totalAmountNumber;
}

function historyAddById(id){
    let currentDate = new Date()
        let option = currentDate.toString('en-US',{
            weekend: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoon: 'Asia/Dhaka',
            timeZoonName: 'short'
        })

        const finalDate = option.replace("GMT", "GMT +0600") 
        return finalDate  
}