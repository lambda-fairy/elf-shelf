const TAU = 2 * Math.PI
const CYCLE_LENGTH_MS = 19 * 1000
const NOISE_FACTOR = 0.2

let start

function strobe() {
  const now = performance.now()
  if (!start) start = now
  const time = now - start
  const noise = NOISE_FACTOR * Math.random()
  const light = noise + Math.cos(time / CYCLE_LENGTH_MS * TAU)
  document.documentElement.classList[light < 0 ? 'add' : 'remove']('dark')
  setTimeout(strobe, 50)
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.background = 'white'
  document.getElementById('warning').style.display = 'block'
  document.getElementById('everything').style.display = 'none'
  document.getElementById('view').addEventListener('click', () => {
    document.documentElement.style.background = ''
    document.getElementById('warning').style.display = ''
    document.getElementById('everything').style.display = ''
    strobe()
  })
})
