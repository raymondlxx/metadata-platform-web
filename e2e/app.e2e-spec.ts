import { MetadataplatformWebPage } from './app.po';

describe('metadataplatform-web App', () => {
  let page: MetadataplatformWebPage;

  beforeEach(() => {
    page = new MetadataplatformWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
