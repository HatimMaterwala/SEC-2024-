document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate-button").addEventListener("click", calculateMortgage);
  });
  
  function calculateMortgage() {
    const houseValue = parseFloat(document.getElementById("house-value").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const fixedMonthlyPayment = parseFloat(document.getElementById("fixed-monthly-payment").value);
    
    let remainingLoan = houseValue;
    let totalPayments = 0;
    
    while (remainingLoan > 0) {
      const monthlyInterest = remainingLoan * (interestRate / 100 / 12);
      remainingLoan = remainingLoan + monthlyInterest - fixedMonthlyPayment;
      totalPayments += fixedMonthlyPayment;
      
      if (monthlyInterest >= remainingLoan) {
        totalPayments += remainingLoan;
        remainingLoan = 0;
      }
    }
    
    if (remainingLoan < 0) {
      remainingLoan = 0;
    }
    
    document.getElementById("result").innerHTML = `With a house value of $${houseValue}, an interest rate of ${interestRate}%, and a fixed monthly payment of $${fixedMonthlyPayment}, you can repay the mortgage in approximately ${totalPayments} months with a remaining loan balance of $${remainingLoan.toFixed(2)}.`;
  }
  