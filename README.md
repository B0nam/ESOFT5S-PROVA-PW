# ESOFT5S-PROVA-PW
Utilize uma grid para organizar o conteúdo da página, onde o conteúdo principal (main) ocupa a maior parte do espaço. (1 pontos)

O header tem cor de fundo #0074d9 e o footer tem cor de fundo #333. (0.25 pontos)

Adicione o texto "© 2024 Prova de Programação Web" no footer. (0.25 pontos)

Página de Estados (./index.html) (2.5 pontos).

Utilize a API do IBGE para buscar dados dos estados brasileiros. (1 ponto)

Liste o nome de cada estado dentro de uma lista (ul/li). (0.25 pontos)

Remova os bullet points da lista. (0.25 pontos)

Cada estado deve ser um link (âncora) que direciona para a página de municípios (./municipios/index.html), passando o UF do estado via querystring. (0.5 pontos)

Os links (âncoras) devem ter cor #333 com uma transição no hover para alterar a opacidade para 0.8. (0.5 pontos)

Página de Municípios (./municipios/index.html) (4 pontos)

Utilize a API do IBGE para buscar os municípios de um estado específico, baseado no UF passado via querystring. (1 ponto)

Exiba o título da página como "Municípios de {UF}", onde {UF} é substituído pelo UF recebido na querystring. (0.5 pontos)

Liste os municípios dentro de uma lista não ordenada (ul). (0.25 pontos)

Remova os bullet points da lista. (0.25 pontos)

Cada município deve ser exibido como um item de lista (li) com o nome do município e um botão para favoritar. (0.25 pontos)

O botão de favoritar deve ter cor de fundo #ff4136 e uma transição no hover para alterar a opacidade para 0.8. (0.25 pontos)

Ao clicar no botão de favoritar, o objeto do município deve ser adicionado a uma lista de favoritos no localStorage. Utilize favoritos como nome da chave localStorage. (1.5 pontos)

Página de Favoritos (./favoritos/index.html) (1 ponto)
Buscar a lista de favoritos salva em localStorage e exibir o nome do municipio em uma ul/li cada município favoritado. (1 ponto).

Funcionalidades Extras (0.5 pontos)

Adicione um link (âncora) com o texto "Ver favoritos", no header da página principal e na página de municípios, o link deve direcionar para a página de favoritos (./favoritos/index.html). (0.25 ponto)

Adicione um link (âncora) com o texto "Ir para a home", no header das páginas de municípios e de favoritos, que direciona para a página principal (./index.html). (0.25 ponto)