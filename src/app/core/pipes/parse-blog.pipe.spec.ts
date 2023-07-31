import { ParseBlogPipe } from './parse-blog.pipe';

describe('ParseBlogPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: ParseBlogPipe = new ParseBlogPipe();
    expect(pipe).toBeTruthy();
  });
});
