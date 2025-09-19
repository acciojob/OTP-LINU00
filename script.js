const codes = document.querySelectorAll('.code')

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('code-1').focus()
})

codes.forEach((input, idx) => {
  input.addEventListener('input', () => {
    const value = input.value
    if (!/^[0-9]$/.test(value)) {
      input.value = ''
      return
    }
    if (value && idx < codes.length - 1) {
      codes[idx + 1].focus()
    }
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value) {
        input.value = ''
        return
      }
      if (idx > 0) {
        codes[idx - 1].focus()
        codes[idx - 1].value = ''
      }
    }
  })
})
