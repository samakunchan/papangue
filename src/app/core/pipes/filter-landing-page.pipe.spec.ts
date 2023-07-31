import { FilterLandingPagePipe } from './filter-landing-page.pipe';

describe('FilterLandingPagePipe', (): void => {
  it('create an instance', (): void => {
    const pipe: FilterLandingPagePipe = new FilterLandingPagePipe();
    expect(pipe).toBeTruthy();
  });
});
