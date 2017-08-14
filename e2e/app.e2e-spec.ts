import { GerenciadorProjetosPage } from './app.po';

describe('gerenciador-projetos App', () => {
  let page: GerenciadorProjetosPage;

  beforeEach(() => {
    page = new GerenciadorProjetosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my!');
  });
});
