import dom4 from 'dom4' // eslint-disable-line no-unused-vars
import domready from 'domready'
import { on } from 'bubbly'
import Handsfree from '../lib'

domready(() => {
  let handsfree = new Handsfree()
  handsfree::on('miss', ::console.log)
  handsfree::on('match', ::console.info)
  handsfree::on('match', ({ detail: transcript }) => {
    console.log({ transcript })
  })
  document.query('button.start')
    ::on('click', event => {
      handsfree.start()
    })
  document.query('button.stop')
    ::on('click', event => {
      handsfree.stop()
    })
  document.query('button.test')
    ::on('click', event => {
      window.alert('Success!')
    })
})
