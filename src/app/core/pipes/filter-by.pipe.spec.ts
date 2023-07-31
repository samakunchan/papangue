import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: FilterByPipe<any> = new FilterByPipe();
    expect(pipe).toBeTruthy();
  });
});
