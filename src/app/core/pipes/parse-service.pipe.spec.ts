import { ParseServicePipe } from './parse-service.pipe';

describe('ParseServicePipe', (): void => {
  it('create an instance', (): void => {
    const pipe: ParseServicePipe = new ParseServicePipe();
    expect(pipe).toBeTruthy();
  });
});
