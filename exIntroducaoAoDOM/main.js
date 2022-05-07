const urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

const getEstados = async () => {
    try {
        const results = await fetch(urlEstados)
        const estados = await results.json();

        const select = document.querySelector("#Estados")

        estados.forEach(estado => {
            const option = document.createElement("option")
            option.innerText = estado.nome
            option.value = estado.sigla
            select.appendChild(option)
        });

    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("load", getEstados)

const getMunicipio = async () => {
    try {
        const select = document.querySelector("#Estados")
        const results = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select.value}/municipios`)
        const municipios = await results.json();

        if (!!document.getElementById("temUmaDiv")) {
            document.getElementById("temUmaDiv").remove()
        }

        //Create div
        const divGerada = document.createElement("div")
        divGerada.id = "temUmaDiv"
        document.body.append(divGerada)

        //Create h2
        const h2Cidades = document.createElement("h2")
        h2Cidades.innerText = "Escolha a Cidade Desejada"
        divGerada.appendChild(h2Cidades)

        //create select
        const selectCidades = document.createElement("select")
        divGerada.appendChild(selectCidades)

        //adicao de municipios
        municipios.forEach(cidade => {
            const option = document.createElement("option")
            option.innerText = cidade.nome
            option.value = cidade.id
            selectCidades.appendChild(option)
        });

        // Criacao botao
        const botaoCidades = document.createElement("button")
        botaoCidades.innerText = "Ver mais..."
        divGerada.appendChild(botaoCidades)
        botaoCidades.addEventListener("click", infoCidade)

        //informacoes cidades
        function infoCidade() {
            if (!!document.getElementById("temUmUl")) {
                document.getElementById("temUmUl").remove()
            }
            municipios.forEach(cidade => {

                if(cidade.id == selectCidades.value){

                    const ul = document.createElement("ul")
                    divGerada.appendChild(ul)
                    ul.id = "temUmUl"

                    const liMicro = document.createElement("li")
                    const liMeso = document.createElement("li")
                    const liRe = document.createElement("li")
                    liMicro.innerText = `Nome microrregião: ${cidade.microrregiao.nome}`
                    liMeso.innerText = `Nome mesorregião: ${cidade.microrregiao.mesorregiao.nome}`
                    liRe.innerText = `Nome regiao: ${cidade.microrregiao.mesorregiao.UF.regiao.nome}`

                    ul.appendChild(liMicro)
                    ul.appendChild(liMeso)
                    ul.appendChild(liRe)
                }
            });
        }

    } catch (e) {
        console.log(e)
    }
}
