import { ParseMenuPipe } from './parse-menu.pipe';

describe('ParseMenuPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: ParseMenuPipe = new ParseMenuPipe();
    expect(pipe).toBeTruthy();
  });
});
