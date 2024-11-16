function calculateInterestAndSavings() {
    const amount = document.getElementById("amount").value;
    const year = document.getElementById("years").value;
    
    const interestRates = {
      2011: 1.2,
      2012: 1.15,
      2013: 1.1,
      2014: 1.05,
      2015: 0.9,
      2016: 0.8,
      2017: 0.9,
      2018: 1,
      2019: 1.2,
      2020: 0.8,
      2021: 0.6
    };
    
    let totalSavings = parseFloat(amount);
    let futureSavings = parseFloat(amount);
    
    for (let i = parseInt(year); i <= 2021; i++) {
      const selectedInterestRate = interestRates[i];
      const interest = (futureSavings * selectedInterestRate) / 100;
      
      futureSavings += interest;
      
      if (i == parseInt(year)) {
        totalSavings += interest;
      }
    }
    
    const selectedInterestRate = interestRates[year];
    const interest = (amount * selectedInterestRate) / 100;
    
    document.getElementById("result").innerHTML = `For the year ${year}:<br><br>Initial Savings: $${amount}<br>Interest Earned: $${interest.toFixed(2)}<br>Total Savings: $${totalSavings.toFixed(2)}<br><br>If you start saving today:<br><br>Future Savings in 2021: $${futureSavings.toFixed(2)}`;
  }
  