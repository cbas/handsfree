import EventTarget from 'event-target-shim'
import { dispatch, on } from 'bubbly'

export default class Recognizer extends EventTarget {
  constructor () {
    super()
  }
  _reconnect = false
  start () {
    if (this.recognizer) this.stop()
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    this.recognizer = new SpeechRecognition()
    this.recognizer.continuous = false
    this.recognizer.interimResults = false
    this.recognizer::on('start', event => {
      this._reconnect = true
    })
    this.recognizer::on('result', event => {
      Array.from(event.results)
        .slice(event.resultIndex)
        .filter(result => result.final || result.isFinal)
        .map(result => Array.from(result))
        .forEach(alternatives => alternatives.forEach(alternative => {
          this::dispatch('transcript', alternative.transcript)
        }))
    })
    this.recognizer::on('error', ({error, message}) => {
      if (error !== 'no-speech') this._reconnect = false
    })
    this.recognizer::on('end', event => {
      if (this._reconnect) this.recognizer.start()
    })
    this.recognizer.start()
  }
  stop () {
    this._reconnect = false
    this.recognizer.stop()
    delete this.recognizer
  }
}
