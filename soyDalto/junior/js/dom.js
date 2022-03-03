// modificar atributo de input
const rango = document.querySelector('.rango');

    console.log(rango.getAttribute('type'));
    rango.setAttribute('type', 'color');
    rango.removeAttribute('type');
    console.dir(rango);


// parrago
const titulo = document.querySelector('.titulo');
const tituloEstilo = titulo.style

    titulo.setAttribute('contentEditable', 'true');
    titulo.setAttribute('dir', 'rtl');
    titulo.removeAttribute('hidden')
    titulo.setAttribute('tabindex', '1')
    titulo.setAttribute('title', 'Lorem Ipsum')

    tituloEstilo.width = '100%'
    tituloEstilo.marginTop = '15px'


// text input
const inputNormal = document.querySelector('.input-normal')
    inputNormal.value = 'input de texto'
    console.dir(inputNormal)


// form
const formulario = document.getElementById('formulario')
const formularioInputs = document.querySelectorAll('#formulario > input')
const nombreInput = document.querySelector('input[name=nombre');

    nombreInput.minLength = 5
    nombreInput.maxLength = 6

    formulario.style.margin = '10px 0'
    formulario.style.padding = '10px'
    formulario.style.backgroundColor = '#eef3f7'

    formularioInputs.forEach((e, i) => {
        console.log(e, i)
        e.style.margin = '10px 0'
        e.style.width = '100%'
    })


// classList
const pListClass = document.querySelector('.class-list')

    pListClass.classList.add('asdf')
    pListClass.classList.remove('qwer')
    pListClass.classList.toggle('qwer')
    pListClass.classList.replace('qwer', 'zxcv')

    console.log(pListClass.classList.item(1))
    console.log(pListClass.classList.contains('asdf'))


// modificacion
const h3Nostrum = document.querySelector('.nostrum')
    h3Nostrum.outerHTML = '<h4>Outer - sit dolores <i><b>quam</b> exercitationem<i></h4>'
    
const h3Similique = document.querySelector('.similique')
    h3Similique.innerHTML = 'Inner - sit dolores <i><b>quam</b> exercitationem<i>'
    
const h3Nobis = document.querySelector('.nobis')
    h3Nobis.textContent = 'textContent - sit dolores quam exercitationem'