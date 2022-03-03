const lista = document.querySelector('.lista')
const fragmento = document.createDocumentFragment()

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = 'Lorem Ipsum'
    fragmento.appendChild(li)
}

lista.appendChild(fragmento)

const headings = document.querySelector('.headings')
const primerHijo = headings.firstChild
const ultimoHijo = headings.lastChild

const primerElementoHijo = headings.firstElementChild
const ultimoElementoHjo = headings.lastElementChild
const todosHijos = headings.childNodes
const hijos = headings.children

    console.log(headings)
    console.log(primerHijo)
    console.log(ultimoHijo)
    console.log(primerElementoHijo)
    console.log(ultimoElementoHjo)
    console.log(todosHijos)
    console.log(hijos)

    for (let hijo in hijos) {
        console.log('hijo:', hijos[hijo])
    }
    
    // no sirve forEach
    // hijos.forEach((e) => {
    //     console.log(e)
    // })


const wrapper = document.querySelector('.wrapper')

const hacheCuatro = document.createElement('h4')
const parrafo = document.createElement('p')

const viejo = document.querySelector('h4')
const remover = document.querySelector('.remover')

hacheCuatro.innerHTML = 'heading hache cuatro'
parrafo.innerHTML = 'parrafito aqui'

    wrapper.replaceChild(hacheCuatro, viejo)
    wrapper.append(parrafo)
    wrapper.removeChild(remover)

    console.dir(hacheCuatro.parentElement)
    console.dir(hacheCuatro.parentNode)

    console.log(parrafo.previousSibling)
    console.log(parrafo.previousElementSibling)
    
    console.log(hacheCuatro.nextSibling)
    console.log(hacheCuatro.nextElementSibling)

    console.log(parrafo.closest('div'))