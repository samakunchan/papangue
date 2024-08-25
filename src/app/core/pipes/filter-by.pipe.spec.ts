import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: FilterByPipe = new FilterByPipe();
    expect(pipe).toBeTruthy();
  });
});
