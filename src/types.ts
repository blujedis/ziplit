
export interface IMap<T = any> {
  [key: string]: T;
}

export interface IApi {

  /**
   * Accepts arguments of array, object or rest array used to map to template.
   * 
   * @example
   * const compiled = ziplit.compile(`My name is ${'name'}`);
   * const rendered = compiled.render({ name: 'Milton' }); // result: 'My name is Milton'
   * 
   * @param obj the indexed map object used for rendering.
   */
  render(obj: object): string;

  /**
   * Accepts arguments of array, object or rest array used to map to template.
   * 
   * @example
   * const compiled = ziplit.compile(`My name is ${'name'}`);
   * const rendered = compiled.render(['Milton']); // result: 'My name is Milton'
   * 
   * @param obj the indexed map object used for rendering.
   */
  render(args: any[]): string;

  /**
   * Accepts arguments of array, object or rest array used to map to template.
   * 
   * @example
   * const compiled = ziplit.compile(`My name is ${'name'}`);
   * const rendered = compiled.render('Milton'); // result: 'My name is Milton'
   * 
   * @param args the arguments used to render the template.
   */
  render(...args: any[]): string;

  /**
   * Reverts the compiled template returning a ziplit template string.
   */
  revert(): string;

  /**
   * The source string in ziplit format, same as calling .revert().
   * 
   * @property 
   */
  source: string;

}
