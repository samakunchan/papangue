import { LimitPipe } from './limit.pipe';

describe('LimitPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: LimitPipe = new LimitPipe();
    expect(pipe).toBeTruthy();
  });
});
