function handelDonateBtn(){
    let totalBalance = parseFloat(totalBalanceEl.innerText);
    let donateBalance = parseFloat(donateBalanceEl.innerText)
    let inputBalance = parseFloat(inputEl.value)
    document.getElementById('total-balance').innerText = totalBalance - inputBalance;
    document.getElementById('donate-balance').innerText = donateBalance + inputBalance;
}