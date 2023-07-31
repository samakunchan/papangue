import { UcFirstPipe } from './uc-first.pipe';

describe('UcFirstPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: UcFirstPipe = new UcFirstPipe();
    expect(pipe).toBeTruthy();
  });
});
