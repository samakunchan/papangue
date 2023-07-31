import { ParseStatsPipe } from './parse-stats.pipe';

describe('ParseStatsPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: ParseStatsPipe = new ParseStatsPipe();
    expect(pipe).toBeTruthy();
  });
});
