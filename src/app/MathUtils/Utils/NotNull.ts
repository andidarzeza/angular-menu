export function notNull(...parameters: any[]): boolean {
  for(const parameter of parameters) {
    if(parameter === null || parameter === undefined) {
      console.error(`Parameter: ${parameter} must not be null or undefined`);
      return false;
    }
  }
  return true;
}
