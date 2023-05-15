import {BankChain_backend} from '../../declarations/BankChain_backend';

async function getBalance(){
  const currentBalance = await BankChain_backend.checkBalance();
  document.getElementById("value").innerText = currentBalance.toFixed(2);
} 

window.addEventListener("load", getBalance());

document.querySelector("form").addEventListener("submit", async function (event){
event.preventDefault();
const button = event.target.querySelector("#submit-btn");
button.setAttribute("disabled", true);
const inputAmount = parseFloat(document.getElementById("input-amount").value);
const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);
inputAmount && await BankChain_backend.topUp(inputAmount)
withdrawalAmount && await BankChain_backend.withdraw(withdrawalAmount)
getBalance()
button.removeAttribute("disabled");
})