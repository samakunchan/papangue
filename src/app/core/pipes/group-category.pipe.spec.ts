import { GroupCategoryPipe } from './group-category.pipe';

describe('GroupCategoryPipe', (): void => {
  it('create an instance', (): void => {
    const pipe: GroupCategoryPipe = new GroupCategoryPipe();
    expect(pipe).toBeTruthy();
  });
});
