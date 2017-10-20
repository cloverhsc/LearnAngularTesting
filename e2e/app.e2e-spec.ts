import { DoTestingPage } from './app.po';

describe('do-testing App', () => {
  let page: DoTestingPage;

  beforeEach(() => {
    page = new DoTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
