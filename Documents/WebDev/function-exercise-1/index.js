import { argv } from 'node:process'

const [,, number] = argv

const numberToText = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
  100: 'Hundred',
  1000: 'Thousand',
}

function checkValue(value) {
  const splitNumber = value.toString().split('')
  if (splitNumber.length === 1) {
    console.log('Once')
  } else if (splitNumber.length === 2) {
    console.log('Tens')
  } else if (splitNumber.length === 3) {
    console.log('Hundred')
  } else if (splitNumber.length === 4) {
    console.log('Thousand')
  } else {
    console.log('Number is Larger than 999,999')
  }
}

function checkOnce(value) {
  const splitNumber = value.toString().split('')

}

const valueNumber = []

switch (splitNumber.length) {
case 1: {
  checkValue(number)
  break
}
case 2: {
  checkValue(number)
  break
}
case 3: {
  checkValue(number)
  break
}
case 4:
  checkValue(number)
  break
default:
      // code block
}

console.log(valueNumber)
