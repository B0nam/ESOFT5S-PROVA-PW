function changePageTitle(title) {
  document.title = title
}

function obterUF() {
    if (!location.search) {
      return
    }
  
    const urlUF = new URLSearchParams(location.search)
    const uf = urlUF.get('UF')
  
    changePageTitle(uf)
    getMunicipios(uf)
}

async function getMunicipios(uf)
{
  try {
    const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    const jsonData = await data.json()
    jsonData.forEach(municipio => {
      gerarListaMunicipio(municipio);
    });
  } catch (error) {
    console.error(error)
  }
}

function gerarListaMunicipio(municipio)
{
    const listaBase = document.querySelector('#lista-municipios-lista')
    const elementoLista = document.createElement('li');
    const conteudoLista = document.createElement('a');
    conteudoLista.textContent = municipio.nome
    listaBase.appendChild(elementoLista);
    elementoLista.appendChild(conteudoLista);

    const btn = document.createElement("button");
    btn.innerHTML = "Favoritar";
    elementoLista.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', function () {
  obterUF();
})