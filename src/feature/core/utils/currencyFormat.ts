export function currencyFormat(num: number, isCurrency: boolean = true) {
    const formattedNumber = num
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    return isCurrency ? '$ ' + formattedNumber : formattedNumber
  }