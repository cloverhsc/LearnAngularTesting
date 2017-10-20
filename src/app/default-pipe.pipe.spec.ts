import { DefaultPipePipe } from './default-pipe.pipe';

describe('Pipe: Default', () => {
  let pipe: DefaultPipePipe;

  beforeEach(() => {
    pipe = new DefaultPipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing on value returns fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300')
  });

  it('providing a value returns value', () => {
    expect(pipe.transform('http://place-hold.it/300', 'fallback')).toBe('http://place-hold.it/300');
  });

  it('asking for https returns https', () => {
    expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
  });
});
