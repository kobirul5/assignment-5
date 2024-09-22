

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

document.getElementById('donat-btn').addEventListener('click', function(){
    handelDonateBtn()
})
