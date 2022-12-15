# Teste Front

Criar uma aplicação em Angular que consuma a api do Spotify, disponibilizar duas telas.
- listar os novos lançamentos (Albuns)
- Tela de Pesquisa (onde deve retornar o resultado do que for inserido no campo)

## Conteudo de cada pagina:

### Home:

Conteudo dos novos lançamentos, com paginação. limitado a exibir apenas 10 registros por pagina
Exibir Nome do album, Artista e foto de capa

### Tela de pesquisa:

Exibir input para ação
Carregar conteudo da pesquisa exibindo as musicas e albuns relacionados ao conteudo do input 
Necessario Paginação, Exibir apenas 5 resultados para cada item (Artista / Album)


**Incluir testes para o codigo construído em Jest**

-----------------------------------------------------------------------------------------------------
#### API Spotify

Documentação da API:
https://developer.spotify.com/documentation/web-api/

**Necessario gerar um token de acesso para bater nas APIs**
Como gerar:

POST - https://accounts.spotify.com/api/token

HEADER:
Content-Type: application/x-www-form-urlencoded
Authorization: Basic MmJkODFkMzc3ZThmNGRhNWJiMjA0YzBiYmQ2NDY3ZGQ6NmFlNDg4NjE3ZTFmNGUyNDlkZWE3MDUwOThjY2I1YmI=


