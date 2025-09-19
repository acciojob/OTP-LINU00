const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((input, idx) => {
  input.addEventListener('input', () => {
    const value = input.value
    if (value && idx < codes.length - 1) {
      codes[idx + 1].focus()
    }
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && idx > 0) {
      codes[idx - 1].focus()
      codes[idx - 1].value = ''
    }
  })
})
