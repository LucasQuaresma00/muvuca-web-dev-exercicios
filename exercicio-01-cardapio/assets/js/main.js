function meuEscopo() {
    const formSelecionado = document.querySelector("#form")

    formSelecionado.addEventListener("submit", function (e) {
        e.preventDefault();

        const comida = e.target.querySelector("#comida").value
        const bebida = e.target.querySelector("#bebida").value

        if (!comida) {
            setResult("Selecione uma comida", false)
            return
        }

        if (!bebida) {
            setResult("Selecione uma bebida", false)
            return
        }

        const precoComida = getPrecoComida(comida)
        const precoBebida = getPrecoBebida(bebida)

        const total = precoComida + precoBebida

        const msg = `Você pediu ${comida} + ${bebida}. Total: R$ ${total.toFixed(2)}`

        setResult(msg, true)
    })

    function getPrecoComida(comida) {
        const precos = {
            pizza: 25,
            hamburguer: 20,
            batata: 15,
            cachorro: 12,
            lasanha: 30
        }

        return precos[comida]
    }

    function getPrecoBebida(bebida) {
        const precos = {
            refrigerante: 8,
            suco: 10,
            agua: 5,
            cha: 7,
            cafe: 6
        }

        return precos[bebida]
    }

    function criaParagrafo() {
        const p = document.createElement('p')
        return p;
    }

    function setResult(msg, isValid) {
        const result = document.querySelector('.resultado')
        result.innerHTML = '';

        const p = criaParagrafo();

        if (isValid) {
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add("bad")
        }

        p.innerHTML = msg
        result.appendChild(p)
    }
}

meuEscopo()