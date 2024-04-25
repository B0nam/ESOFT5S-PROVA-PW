async function getEstados()
{
  try {
    const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`)
    const jsonData = await data.json()
    jsonData.forEach(estado => {
      gerarListaEstado(estado);
    });
  } catch (error) {
    console.error(error)
  }
}

function gerarListaEstado(estado)
{
    const listaBase = document.querySelector('#lista-estados-lista')
    const elementoLista = document.createElement('li');
    const conteudoLista = document.createElement('a');
    conteudoLista.textContent = estado.nome
    conteudoLista.href = `municipios/index.html?UF=${estado.sigla}`

    listaBase.appendChild(elementoLista);
    elementoLista.appendChild(conteudoLista);
}

document.addEventListener('DOMContentLoaded', function () {
    getEstados();
})