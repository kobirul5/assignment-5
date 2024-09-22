

// donation button and history button
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-btn').classList.add('bg-primary')
    document.getElementById('donation-btn').classList.remove('bg-primary')
    

})

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('history-btn').classList.remove('bg-primary')
    document.getElementById('donation-btn').classList.add('bg-primary')
})

// target all file
const totalBalanceEl = document.getElementById('total-balance')
const donateBalanceEl = document.getElementById('donate-balance')
const inputEl = document.getElementById('input-balance')
const historyAddEl = document.getElementById('history-add')


document.getElementById('donate-now-btn1').addEventListener('click', function(){
    handelDonateBtn()
})

function handelDonateBtn() {

    let totalBalance = parseFloat(totalBalanceEl.innerText);
    let donateBalance = parseFloat(donateBalanceEl.innerText)
    let inputBalance = parseFloat(inputEl.value)

    if (inputBalance > totalBalance || isNaN(inputBalance) || inputBalance < 1 || inputBalance === '') {
        return alert('Donation amount is not valid')
    }
    else {
        document.getElementById('total-balance').innerText = totalBalance - inputBalance;
        document.getElementById('donate-balance').innerText = donateBalance + inputBalance;

        console.log(historyAddEl)
    }
}


// history section start 

