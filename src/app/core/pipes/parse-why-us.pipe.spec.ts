import { ParseWhyUsPipe } from './parse-why-us.pipe';

describe('ParseWhyUsPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: ParseWhyUsPipe = new ParseWhyUsPipe();
    expect(pipe).toBeTruthy();
  });
});
