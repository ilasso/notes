
import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('quien es ese pokemon')

search(id)
.then(function (data) {
    render(data)
})
.catch(function(err) {
    console.log('no hubo pokemon', err)
})