let bigimg = document.querySelector('#bigimg')
let rimg = document.querySelector('#rimg')

bigimg.addEventListener('mousemove', (e) => {
  rimg.style.transform = `translate(-${e.offsetX}px, -${e.offsetY}px)`;
})
