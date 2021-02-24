const f1Input = document.getElementById('f1')
const f2Input = document.getElementById('f2')
const pDisp = document.getElementById('p')
const calcButton = document.getElementById('calc')

function multiply (factor1, factor2) {
  let product = 0
  if (Math.abs(factor1) > 100000 || Math.abs(factor1) > 100000) {
    return NaN
  } else if (factor1 == 0 || factor2 == 0) {
    return 0
  } else if (factor1 > 0) {
    for (let i = 0; i < factor1; i++) {
      product += factor2
    }
  } else if (factor1 < 0) {
    for (let i = 0; i > factor1; i--) {
      product -= factor2
    }
  }
  return product
}

function onclick () {
  pDisp.innerText = multiply(parseInt(f1Input.value), parseInt(f2Input.value))
}

calcButton.addEventListener('click', onclick)
