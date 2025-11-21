const formatCurrency = (amount) => {
    const value = Math.abs(amount);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(value);
  };
  
  export default formatCurrency;