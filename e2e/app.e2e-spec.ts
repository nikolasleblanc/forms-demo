import { OnistPage } from './app.po';

describe('onist App', () => {
  let page: OnistPage;

  beforeEach(() => {
    page = new OnistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
