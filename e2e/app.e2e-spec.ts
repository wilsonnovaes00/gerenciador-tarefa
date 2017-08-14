import { GerenciadorTarefaPage } from './app.po';

describe('gerenciador-tarefa App', () => {
  let page: GerenciadorTarefaPage;

  beforeEach(() => {
    page = new GerenciadorTarefaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my!');
  });
});
