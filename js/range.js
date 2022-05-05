let range = document.querySelector('#range')
let text = document.querySelector('#text')
let span = document.querySelector('#span')


range.addEventListener('input', (e) => {
  text.innerHTML = range.value
  span.style.width = `${range.value}%`
})
