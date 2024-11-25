const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
   
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = `Hoje, existem cerca de <span>${dados.total_pessoas_mundo}</span>, conctadas em redes sociais são <span>${dados.total_pessoas_conectadas}</span> da população. Em média, os usúarios passam cerca de <span>${dados.tempo_medio}</span> por dia nessas plataformas.`
    console.log(paragrafo)

   const container = document.getElementById(graficos-container)
   container.appendChild(paragrafo)


}
    visualizarInformacoesGlobais()
