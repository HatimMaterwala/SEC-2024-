const stockAndMutualFundData = [
    { date: '2011-01-03', stockOpen: 9.833, stockClose: 9.951, mutualFundPrice: 4.81 },
    { date: '2011-01-04', stockOpen: 10.038, stockClose: 10.003, mutualFundPrice: 4.92 },
    // Add all other data entries here
  ];
  
  function analyzeStockAndMutualFundData(data) {
    let totalStockOpen = 0;
    let totalStockClose = 0;
    let totalMutualFundPrice = 0;
  
    for (let entry of data) {
      totalStockOpen += entry.stockOpen;
      totalStockClose += entry.stockClose;
      totalMutualFundPrice += entry.mutualFundPrice;
    }
  
    const averageStockOpen = totalStockOpen / data.length;
    const averageStockClose = totalStockClose / data.length;
    const averageMutualFundPrice = totalMutualFundPrice / data.length;
  
    const analysis = `Average Stock Open Price: ${averageStockOpen.toFixed(2)} CAD
                      Average Stock Close Price: ${averageStockClose.toFixed(2)} CAD
                      Average Mutual Fund Price: ${averageMutualFundPrice.toFixed(2)} CAD`;
  
    console.log(analysis);
  }
  
  // Call the function with the provided data
  analyzeStockAndMutualFundData(stockAndMutualFundData);