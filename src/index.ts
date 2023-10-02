const world = 'world';

export function hello(who: string = world): string {
  return `Hello demo ${who}! `;
}