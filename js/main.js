

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


const donateBalanceEl = document.getElementById('donate-balance')
const inputEl = document.getElementById('input-balance')
const title1 = document.getElementById('title-1')


document.getElementById('donate-now-btn1').addEventListener('click', function () {

    handelDonateBtn();
})

function handelDonateBtn() {

    let totalBalance = parseFloat(totalBalanceEl.innerText);
    let donateBalance = parseFloat(donateBalanceEl.innerText)
    let inputBalance = parseFloat(inputEl.value)

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


    if (inputBalance > totalBalance || isNaN(inputBalance) || inputBalance < 1 || inputBalance === '') {
        
        return alert('Donation amount is not valid')
    }
    else {
        document.getElementById('total-balance').innerText = totalBalance - inputBalance;
        document.getElementById('donate-balance').innerText = donateBalance + inputBalance;
        document.getElementById('history-text').classList.add('hidden')
        modal.showModal()
        const finalDate = option.replace("GMT", "GMT +0600")
        historyAddEl.innerHTML += `<div class="border p-10 rounded-2xl space-y-4 m-10">
                    <h2 class="text-2xl text-dark font-bold"> ${inputBalance} Taka ${title1.innerText} </h2>
                    <p class="text-dark2">Date: ${finalDate} </p>
                </div>`

    }
}

// card 2 

const donateBalanceEl2 = document.getElementById('donate-balance2')
const inputEl2 = document.getElementById('input-balance2')
const title2 = document.getElementById('title-2')


document.getElementById('donate-now-btn2').addEventListener('click', function () {

    handelDonateBtn2();
})

function handelDonateBtn2() {

    let totalBalance = parseFloat(totalBalanceEl.innerText);
    let donateBalance2 = parseFloat(donateBalanceEl2.innerText)
    let inputBalance2 = parseFloat(inputEl2.value)

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


    if (inputBalance2 > totalBalance || isNaN(inputBalance2) || inputBalance2 < 1 || inputBalance2 === '') {
        
        return alert('Donation amount is not valid')
    }
    else {
        document.getElementById('total-balance').innerText = totalBalance - inputBalance2;
        document.getElementById('donate-balance2').innerText = donateBalance2 + inputBalance2;
        document.getElementById('history-text').classList.add('hidden')
        modal.showModal()
        const finalDate = option.replace("GMT", "GMT +0600")
        historyAddEl.innerHTML += `<div class="border p-10 rounded-2xl space-y-4 m-10">
                    <h2 class="text-2xl text-dark font-bold"> ${inputBalance2} Taka ${title2.innerText} </h2>
                    <p class="text-dark2">Date: ${finalDate} </p>
                </div>`

    }
}
// card 3

const donateBalanceEl3 = document.getElementById('donate-balance3')
const inputEl3 = document.getElementById('input-balance3')
const title3 = document.getElementById('title-3')


document.getElementById('donate-now-btn3').addEventListener('click', function () {

    handelDonateBtn3();
})

function handelDonateBtn3() {

    let totalBalance = parseFloat(totalBalanceEl.innerText);
    let donateBalance3 = parseFloat(donateBalanceEl3.innerText)
    let inputBalance3 = parseFloat(inputEl3.value)

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


    if (inputBalance3 > totalBalance || isNaN(inputBalance3) || inputBalance3 < 1 || inputBalance3 === '') {
        
        return alert('Donation amount is not valid')
    }
    else {
        document.getElementById('total-balance').innerText = totalBalance - inputBalance3;
        document.getElementById('donate-balance3').innerText = donateBalance3 + inputBalance3;
        document.getElementById('history-text').classList.add('hidden')
        modal.showModal()
        const finalDate = option.replace("GMT", "GMT +0600")
        historyAddEl.innerHTML += `<div class="border p-10 rounded-2xl space-y-4 m-10">
                    <h2 class="text-2xl text-dark font-bold"> ${inputBalance3} Taka ${title3.innerText} </h2>
                    <p class="text-dark2">Date: ${finalDate} </p>
                </div>`

    }
}

