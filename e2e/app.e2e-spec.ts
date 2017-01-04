import { ProjektAngularPage } from './app.po';

describe('projekt-angular App', function() {
  let page: ProjektAngularPage;

  beforeEach(() => {
    page = new ProjektAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
