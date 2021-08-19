//Deposit Balance
document.getElementById('deposit-btn').addEventListener('click', function(){
  const depositField = document.getElementById('deposit-input');
  const depositAmount = depositField.value;
  const newDepositAmount = parseFloat(depositAmount);
  const depositBalance = document.getElementById('deposit-amount');
  const previousDepositBalance = depositBalance.innerText;
  const newDepositTotal = newDepositAmount + parseFloat(previousDepositBalance);
  depositBalance.innerText = newDepositTotal ;

  //Update Account Balance
  const balanceTotal = document.getElementById('total-balance');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalance = parseFloat(balanceTotalText);
  const newTotalbalance = previousBalance + newDepositAmount;
  balanceTotal.innerText = newTotalbalance;

  //clear input
  depositField.value = '';
  });

  //Widthdraw Balance
document.getElementById('widthdraw-btn').addEventListener('click', function(){
   const widthdrawField = document.getElementById('widthdraw-input');
   const newWidthdrawAmount = widthdrawField.value;
   const widthdrawBalance = document.getElementById('withdraw-amount');
   const previousWidthdrawBalance = widthdrawBalance.innerText;
   const newWidthdrawTotal = parseFloat( newWidthdrawAmount) + parseFloat(previousWidthdrawBalance);
   widthdrawBalance.innerText = newWidthdrawTotal ;
 
   //Update Account Balance
   const balanceTotal = document.getElementById('total-balance');
   const previousBalanceText = balanceTotal.innerText;
   const  previousBalanceTotal = parseFloat(previousBalanceText);
   const newTotalbalance = previousBalanceTotal - newWidthdrawAmount;
   balanceTotal.innerText = newTotalbalance;
 
   //clear input
   widthdrawField.value = '';
   });