const text = document.querySelector('#texts')
const t = document.querySelector('#t')


let texts = []

let a = null

text.addEventListener('keydown', (e) => {

  console.log(text.value)
  // a = text.value
  // texts.push(a.split(' '))
  // t.innerHTML = a


  // texts.forEach(item => {
  //   if(item.includes('#')) {
  //     // t.style.color = 'blue'
  //     t.innerHTML = `
  //     <span class="text__s">${item}</span>
  //     `
  //   } else {
  //     t.innerHTML = item
  //   }
  // })
})
