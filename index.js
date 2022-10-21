const { argv } = require('node:process')

const [,, args] = argv

const numToString = (num) => {
  const numbers = {
    0 : 'Zero',
    1 : 'One',
    2 : 'Two',
    3 : 'Three',
    4 : 'Four',
    5 : 'Five',
    6 : 'Six',
    7 : 'Seven',
    8 : 'Eight',
    9 : 'Nine',
    10 : 'Ten',
    11 : 'Eleven',
    12 : 'Twelve',
    13 : 'Thirteen',
    14 : 'Fourteen',
    15 : 'Fifteen',
    16 : 'Sixteen',
    17 : 'Seventeen',
    18 : 'Eighteen',
    19 : 'Nineteen',
    20 : 'Twenty',
    30 : 'Thirty',
    40 : 'Forty',
    50 : 'Fifty',
    60 : 'Sixty',
    70 : 'Seventy',
    80 : 'Eighty',
    90 : 'Ninety',
    100 : 'Hundred',
    200 : 'Hundred',
    300 : 'Hundred',
    400 : 'Hundred',
    500 : 'Hundred',
    600 : 'Hundred',
    700 : 'Hundred',
    800 : 'Hundred',
    900 : 'Hundred',
    1000 : 'Thousand',
  }
  const digits = num.toString().split('')
  const digits2 = num
  const valueNumber = []

  switch(digits.length) {
    case 1:
      console.log('Once')
      valueNumber.push(numbers[digits[0]])
      break;
    case 2:
      if (numbers.hasOwnProperty(digits2)){
        valueNumber.push(numbers[digits2])
      } else {
        const tens = digits[0]+0
        const tensValue = numbers[tens] + '-' + numbers[digits[0+1]]
        valueNumber.push(tensValue)
      }
      break;
    case 3:
      console.log(numbers.hasOwnProperty(digits[1] + digits[2]))
      if (numbers.hasOwnProperty(digits2)) {
        const hundred = digits[0] + 0 + 0
        const tens = digits[1]+digits[2]
        const hundredValue = numbers[digits[0]] + '-' + numbers[hundred]
        valueNumber.push(hundredValue)
        console.log('1')
      } 
      // console.log(digits[1] === '0')
      // console.log('True')      
      if (digits[1] === '0') {
        console.log('2')
        const hundred = digits[0]+0+0
        const hundredValue = numbers[digits[0]] + '-' + numbers[hundred]
        + '-' + numbers[digits[2]]
        valueNumber.push(hundredValue)
      } else if (numbers.hasOwnProperty(digits[1] + digits[2])) {
        console.log(digits2[1] === 0 && digits2[2] === 0)
        if (digits2[1] === 0 && digits2[2] === 0) {
          console.log('test5')
        }
        console.log('test6')
        const hundred = digits[0] + 0 + 0
        const tens = digits[1]+digits[2]
        const hundredValue = numbers[digits[0]] + '-' + numbers[hundred]
        + '-' + numbers[tens]
        let twentyNinety = '-' + numbers[digits[2]]
        if (numbers.hasOwnProperty(digits[1])) {
          console.log('twentyNinety')
        }
        valueNumber.push(hundredValue + twentyNinety)
        console.log(numbers.hasOwnProperty(digits[1]+digits[2]))
      }
      // } 
      console.log(digits[1] === 0 && digits[2] !== 0)
      if (digits[1] === 0 && digits[2] !== 0) {
        console.log('Last')
        const hundred = digits[0]+0+0
        const tens = digits[1] + 0
        const hundredValue = numbers[digits[0]] + '-' + numbers[hundred]
        + '-' + numbers[tens] + '-' + numbers[digits[2]]
        valueNumber.push(hundredValue)
      }
      break;
    case 4:
      // code block
      break;
    default:
      // code block
  }
  // for (let i = 0; i < digits.length; ) {
  //   if (digits.length === 1) {
  //     console.log('Once')
  //     valueNumber.push(numbers[digits[i]])
  //   } else if (digits.length === 2) {
  //     if (Object.values(digits2)) {
  //       valueNumber.push(numbers[digits2])
  //       break
  //     } else {
  //       const tens = digits[i]+0
  //       const tensValue = numbers[tens] + '-' + numbers[digits[i+1]]
  //       valueNumber.push(tensValue)
  //       break
  //     } 
  //   } else if (digits.length === 3) {
  //     if (Object.values(digits2)) {
  //       valueNumber.push(numbers[digits2])
  //       break
  //     } else if (digits[i+1] === 0) {
  //       const hundred = digits[i]+00
  //       console.log(hundred)
  //       const hundredValue = numbers[hundred] + '-' + numbers[digits[i+2]]
  //       //console.log(numbers[digits[i]])
  //       valueNumber.push(hundredValue)
  //       break
  //     }
  //   }
  //   i += 1
  //   break
  // }
 //else if ()

  console.log(valueNumber);
}

numToString(args)


