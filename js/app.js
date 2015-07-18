import dom4 from 'dom4' // eslint-disable-line no-unused-vars
import domready from 'domready'
import Handsfree from '../lib'

domready(() => {
  let handsfree = new Handsfree()
  document.query('button.start')
    .addEventListener('click', event => {
      handsfree.start()
    })
  document.query('button.stop')
    .addEventListener('click', event => {
      handsfree.stop()
    })
  document.query('button.clear')
    .addEventListener('click', event => {
      document.query('textarea').value = ''
    })
  document.query('button.test')
    .addEventListener('click', event => {
      window.alert('Success!')
    })
})
