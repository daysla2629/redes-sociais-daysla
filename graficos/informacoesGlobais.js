const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);
        const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto'

  )
paragrafo.innerHTML = `Hoje, existem cerca de <span> ${dados.total_pessoas_mundo}, conctadas em redes sociais são <span>${dados.total_pessoas_conectadas} da população. Em média, os usúarios passam cerca de <span>${dados.tempo_medio} por dia nessas plataformas.`



const container = document.getElementById(‘graficos-container’)
container.appendChild(paragrafo)



    visualizarInformacoesGlobais()
}