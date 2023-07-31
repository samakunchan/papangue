import { ParsePortfolioPipe } from './parse-portfolio.pipe';

describe('ParsePortfolioPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: ParsePortfolioPipe = new ParsePortfolioPipe();
    expect(pipe).toBeTruthy();
  });
});
