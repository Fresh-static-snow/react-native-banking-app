export const cardNumberGenerator = (): string => {
  let cardNumber: string = '';

  for (let i = 0; i <= 4; i++) {
    const fourDigits = Math.floor(1000 + Math.random() * 9000);
    if (i !== 0) {
      cardNumber += fourDigits;
    }
  }
  return cardNumber;
};
