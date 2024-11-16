document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate-button").addEventListener("click", calculateBudget);
  });
  
  function calculateBudget() {
    const desiredIncome = parseFloat(document.getElementById("desired-income").value);
    const startYear = parseInt(document.getElementById("start-year").value);
    
    const incomeAndExpenses = {
      2011: { income: 76679.88, essentialExpenses: 721, nonEssentialExpenses: 500, rent: 1010 },
      2012: { income: 76165.93, essentialExpenses: 748, nonEssentialExpenses: 520, rent: 1030 },
      2013: { income: 76000.88, essentialExpenses: 771, nonEssentialExpenses: 540, rent: 1035 },
      2014: { income: 75717.59, essentialExpenses: 793, nonEssentialExpenses: 560, rent: 1071 },
      2015: { income: 78247.69, essentialExpenses: 820, nonEssentialExpenses: 580, rent: 1110 },
      2016: { income: 87842.58, essentialExpenses: 850, nonEssentialExpenses: 600, rent: 1137 },
      2017: { income: 86485.52, essentialExpenses: 880, nonEssentialExpenses: 620, rent: 1202 },
      2018: { income: 88501.24, essentialExpenses: 918, nonEssentialExpenses: 640, rent: 1296 },
      2019: { income: 87979.71, essentialExpenses: 956, nonEssentialExpenses: 660, rent: 1362 },
      2020: { income: 105991.04, essentialExpenses: 990, nonEssentialExpenses: 680, rent: 1374 },
      2021: { income: 104214.60, essentialExpenses: 1038, nonEssentialExpenses: 700, rent: 1440 },
      2022: { income: 105621.18, essentialExpenses: 1106, nonEssentialExpenses: 720, rent: 1708 }
    };
    
    let currentYear = startYear;
    let totalSavings = 0;
    
    for (let i = currentYear; i <= 2030; i++) {
      const yearData = incomeAndExpenses[i];
      const monthlyExpenses = yearData.essentialExpenses + yearData.nonEssentialExpenses + yearData.rent;
      const monthlyIncome = yearData.income / 12;
      
      totalSavings += (monthlyIncome - monthlyExpenses) * 12;
    }
    
    const yearsAhead = 2030 - startYear;
    const additionalIncomeNeeded = desiredIncome - (incomeAndExpenses[startYear].income + totalSavings);
    
    document.getElementById("result").innerHTML = `Based on your desired annual income of $${desiredIncome} starting from ${startYear}, you would need an additional total savings of $${additionalIncomeNeeded.toFixed(2)} by 2030 (${yearsAhead} years) in order to meet your goal.`;
  }
  