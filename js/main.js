

// donation button and history button
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-btn').classList.add('bg-primary')
    document.getElementById('donation-btn').classList.remove('bg-primary')


})

document.getElementById('donation-btn').addEventListener('click', function () {
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
const title1 = document.getElementById('title-1')


document.getElementById('donate-now-btn1').addEventListener('click', function () {
    handelDonateBtn();
})

function handelDonateBtn() {

    let totalBalance = parseFloat(totalBalanceEl.innerText);
    let donateBalance = parseFloat(donateBalanceEl.innerText)
    let inputBalance = parseFloat(inputEl.value)

    let currentDate = new Date()
    let option = {
        weekend: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoon: 'Asia/Dhaka',
        timeZoonName: 'short'
    }


    if (inputBalance > totalBalance || isNaN(inputBalance) || inputBalance < 1 || inputBalance === '') {
        return alert('Donation amount is not valid')
    }
    else {
        showModal()
        document.getElementById('total-balance').innerText = totalBalance - inputBalance;
        document.getElementById('donate-balance').innerText = donateBalance + inputBalance;
        historyAddEl.innerHTML += `<div class="border p-10 rounded-2xl space-y-4 m-10">
                    <h2 class="text-2xl text-dark font-bold"> ${inputBalance} Taka ${title1.innerText} </h2>
                    <p class="text-dark2">${currentDate.toLocaleDateString('en-Us', option)} </p>
                </div>`

    }
}


// history section start 

