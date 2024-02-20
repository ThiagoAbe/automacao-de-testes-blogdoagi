// Define o conjunto de testes
describe('Testes do Blog do Agi', function() {
  // Antes de cada teste, visita o blog
  beforeEach(function() {
    cy.visit('https://blogdoagi.com.br/')
  })

  // Função auxiliar para realizar uma pesquisa
  function realizarPesquisa(seletor, termo) {
    cy.get(seletor).type(`${termo}{enter}`);
  }

  // Teste 1: Verifica se a pesquisa retorna resultados
  it('Pesquisa retorna resultados', function() {
    // Realiza uma pesquisa que sabemos que retornará resultados
    realizarPesquisa('.site-header-above-section-right > .ast-builder-layout-element', 'emprestimo');
    realizarPesquisa('.search-field', 'emprestimo');
    // Verifica se a página contém o termo "emprestimo"
    cy.get('#content > .ast-container').should('contain', 'emprestimo');
  })

  // Teste 2: Verifica se a pesquisa retorna nenhum resultado
  it('Pesquisa retorna nenhum resultado', function() {
    // Realiza uma pesquisa que sabemos que não retornará resultados
    realizarPesquisa('.site-header-above-section-right > .ast-builder-layout-element', 'xiforimpula');
    realizarPesquisa('.search-field', 'xiforimpula');
    // Verifica se a página contém a mensagem "Nenhum resultado encontrado"
    cy.get('#content > .ast-container').should('contain', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.');
  })
})