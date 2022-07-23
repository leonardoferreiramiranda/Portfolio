const titulo = document.querySelector("h1")

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("")
    elemento.innerHTML = ""
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    })
}

typeWriter(titulo)


