const urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"


const getEstados = async () => {
    try{
        const results = await fetch(urlEstados)
        const estados = await results.json();
        
        const nomesEstados = estados.map((item) => item.nome)
        console.log(nomesEstados)

        const select = document.querySelector("#Estados")

        estados.forEach(estado => {
            const option = document.createElement("option")
            option.innerText = estado.nome
            option.value = estado.sigla
            select.appendChild(option)          
        });

    }catch (error) {
        console.log(error);
    }
}

window.addEventListener("load", getEstados)

const getMunicipio = async () => {
    try{
        const select = document.querySelector("#Estados")
        const results = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select.value}/municipios`)
        const municipios = await results.json();

        const h2 = document.createElement("h2")
        h2.innerText = "Ola"
        document.body.append(h2)

        console.log(municipios)
    }catch(e){
        console.log(e)
    }
}
