

// donation button and history button
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-btn').classList.add('bg-primary')
    document.getElementById('donation-btn').classList.remove('bg-primary')
    document.getElementById('footer').classList.add('mt-96')


})

document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('history-btn').classList.remove('bg-primary')
    document.getElementById('donation-btn').classList.add('bg-primary')
    document.getElementById('footer').classList.remove('mt-96')
})

// target all file

const totalBalanceEl = document.getElementById('total-balance')
const modal = document.getElementById('my_modal_1')
const historyAddEl = document.getElementById('history-add')


document.getElementById('donate-now-btn1').addEventListener('click', function () {
    const totalInputAmount = getAmountInputId('input-balance');
    const totalBalance = getTotalAmountId('total-balance')
    const totalDonateBalance = getTotalAmountId('donate-balance')
    const title1 = document.getElementById('title-1')
    const historyTime = historyAddById()

    if (totalInputAmount > totalBalance || isNaN(totalInputAmount) || totalInputAmount < 1 || totalInputAmount === '') { 
    return alert('Donation amount is not valid')
    }
    else{
            const newBalance = totalBalance - totalInputAmount;
    document.getElementById('total-balance').innerText = newBalance
    const newDonateBalance = totalDonateBalance + totalInputAmount;
    document.getElementById('donate-balance').innerText = newDonateBalance
    document.getElementById('history-text').classList.add('hidden')

    modal.showModal()
    
    historyAddEl.innerHTML += `<div class="border p-10 rounded-2xl space-y-4 m-10">
                    <h2 class="text-2xl text-dark font-bold"> ${totalInputAmount} Taka ${title1.innerText} </h2>
                    <p class="text-dark2">Date: ${historyTime} </p>
                    </div>`
    }
})

// card 2 

document.getElementById('donate-now-btn2').addEventListener('click', function () {
    const totalInputAmount = getAmountInputId('input-balance2');
    const totalBalance = getTotalAmountId('total-balance')
    const totalDonateBalance = getTotalAmountId('donate-balance2')
    const title = document.getElementById('title-2')
    const historyTime = historyAddById()

    if (totalInputAmount > totalBalance || isNaN(totalInputAmount) || totalInputAmount < 1 || totalInputAmount === '') { 
    return alert('Donation amount is not valid')
    }
    else{
            const newBalance = totalBalance - totalInputAmount;
    document.getElementById('total-balance').innerText = newBalance
    const newDonateBalance = totalDonateBalance + totalInputAmount;
    document.getElementById('donate-balance2').innerText = newDonateBalance
    document.getElementById('history-text').classList.add('hidden')

    modal.showModal()
    
    historyAddEl.innerHTML += `<div class="border p-10 rounded-2xl space-y-4 m-10">
                <h2 class="text-2xl text-dark font-bold"> ${totalInputAmount} Taka ${title.innerText} </h2>
                <p class="text-dark2">Date: ${historyTime} </p>
                </div>`
    }
})
// card 3

document.getElementById('donate-now-btn3').addEventListener('click', function () {
    const totalInputAmount = getAmountInputId('input-balance3');
    const totalBalance = getTotalAmountId('total-balance')
    const totalDonateBalance = getTotalAmountId('donate-balance3')
    const title = document.getElementById('title-3')
    const historyTime = historyAddById()

    if (totalInputAmount > totalBalance || isNaN(totalInputAmount) || totalInputAmount < 1 || totalInputAmount === '') { 
    return alert('Donation amount is not valid')
    }
    else{
            const newBalance = totalBalance - totalInputAmount;
    document.getElementById('total-balance').innerText = newBalance
    const newDonateBalance = totalDonateBalance + totalInputAmount;
    document.getElementById('donate-balance3').innerText = newDonateBalance
    document.getElementById('history-text').classList.add('hidden')

    modal.showModal()
    
    historyAddEl.innerHTML += `<div class="border p-10 rounded-2xl space-y-4 m-10">
                <h2 class="text-2xl text-dark font-bold"> ${totalInputAmount} Taka ${title.innerText} </h2>
                <p class="text-dark2">Date: ${historyTime} </p>
                </div>`
    }
})



