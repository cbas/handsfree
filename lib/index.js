import dom4 from 'dom4' // eslint-disable-line no-unused-vars
import Recognizer from './Recognizer'
import EventTarget from 'event-target-shim'
import { on, dispatch } from 'bubbly'

export default class Handsfree extends EventTarget {
  start () {
    if (this.recognizer) this.stop()
    this.recognizer = new Recognizer()
    this.recognizer::on('transcript', ({detail: transcript}) => {
      const match = document.queryAll('button, a')
        .find(element => {
          const label = element.innerText.trim().toLowerCase()
          const command = transcript.trim().toLowerCase()
          return label.includes(command)
        })
      if (match) {
        match.click()
        this::dispatch('match', { transcript, match })
      } else {
        this::dispatch('miss', { transcript })
      }
    })
    this.recognizer.start()
  }
  stop () {
    this.recognizer.stop()
    delete this.recognizer
  }
}
