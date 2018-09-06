import { ShareadModule } from './sharead.module';

describe('ShareadModule', () => {
  let shareadModule: ShareadModule;

  beforeEach(() => {
    shareadModule = new ShareadModule();
  });

  it('should create an instance', () => {
    expect(shareadModule).toBeTruthy();
  });
});
