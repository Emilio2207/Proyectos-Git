const $ = (element) => document.querySelector(element) 

const textarea = $ ('.textarea')
const ch = $ ('.ch')

ch.innerHTML = 0

textarea.addEventListener('input', (e) => {
    ch.innerHTML = e.target.value.length
})