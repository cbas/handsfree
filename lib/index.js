export default class Handsfree {
  constructor () {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    this.recognizer = new SpeechRecognition()
    this.recognizer.continuous = true
    this.recognizer.interimResults = false
    this.recognizer.addEventListener('start', event => {
      console.log('start', event.results)
    })
    this.recognizer.addEventListener('result', event => {
      document.querySelector('textarea').value += `${event.resultIndex}\n`
      const results = Array.from(event.results)
        .slice(event.resultIndex)
        .filter(result => result.final)
      console.log('results', results)
    })
    this.recognizer.addEventListener('error', ({error, message}) => {
      console.error(error, message)
    })
    this.recognizer.addEventListener('end', event => {
      console.log('end')
      // this.recognizer.start()
    })
  }
  start () {
    this.recognizer.start()
  }
  stop () {
    this.recognizer.stop()
  }
}
