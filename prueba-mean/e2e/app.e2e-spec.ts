import { PruebaMeanPage } from './app.po';

describe('prueba-mean App', () => {
  let page: PruebaMeanPage;

  beforeEach(() => {
    page = new PruebaMeanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
