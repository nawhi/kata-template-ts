import { greet } from '../src/greet';

describe('greet', () => {
  it('greets the given name', () => {
    expect(greet('world')).toEqual('Hello, world');
  });
});
