export class Handsfree {
  constructor () {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    var recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = false
    recognition.addEventListener('start', event => {
      console.log('start', event.results)
    })
    recognition.addEventListener('result', event => {
      document.querySelector('textarea').value += `${event.resultIndex}\n`
      const results = Array.from(event.results)
        .slice(event.resultIndex)
        .filter(result => result.final)
      console.log('results', results)
    })
    recognition.addEventListener('error', ({error, message}) => {
      console.error(error, message)
    })
    recognition.addEventListener('end', event => {
      console.log('end')
      recognition.start()
    })

    document.querySelector('button')
      .addEventListener('click', event => recognition.start())
  }
}
