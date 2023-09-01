export const formatIDRCurrency = (number: number) => {
    if (isNaN(number)) return 0

    // Convert the number to a string and remove any non-digit characters
    const numberString = String(number).replace(/\D/g, '');
  
    // Split the number into thousands and decimals parts
    const thousands = numberString.slice(0, -2);
  
    // Add dots for thousands separator
    const formattedThousands = thousands.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Combine the formatted parts with the currency symbol
    const formattedCurrency = `Rp${formattedThousands}`;
  
    return formattedCurrency;
}
