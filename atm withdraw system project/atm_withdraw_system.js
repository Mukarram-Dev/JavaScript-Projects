let user = {
  'name' : 'Mukarram Ali',
  'age' : 23,
  'pin' : '0001',
  'balance' : 10000,
}



checkPin();
checkBalanceAndProceed();  
alert('Amount Withdraw Successfully');


console.log('Remaining Balance is '+ user.balance);



function checkBalanceAndProceed() {

  while (true) {
  let withdrawAmt= inputPrompt('Please Enter Your withdraw amount');

    if (withdrawAmt<=0) {
      alert('Please Enter Valid Amount');
          
    } else if(withdrawAmt>=user.balance) {
      alert('No Sufficient Balance');
    }
    else if (withdrawAmt<=user.balance){
      user.balance=user.balance-withdrawAmt;
      break;
    }
    else {
      alert('Something went wrong');
  
    }
    
  }
}



function checkPin() {
  while (true) {
    enteredPin= inputPrompt('Please Enter Your Pin');
    if (user.pin==enteredPin) {
      break;
    }
    alert("Invalid input. Please try again.");
  }
}

function inputPrompt(input) {
 return prompt(input); 
}

