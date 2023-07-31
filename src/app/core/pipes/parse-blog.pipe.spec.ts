import { ParseBlogPipe } from './parse-blog.pipe';

describe('ParseBlogPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseBlogPipe();
    expect(pipe).toBeTruthy();
  });
});
