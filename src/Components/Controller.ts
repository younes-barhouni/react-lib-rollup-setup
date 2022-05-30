
import * as types from "./types";



/**
 * Empty controller
 */
export default class Controller {

  options: Options;
  
  /**
   * Controller constructor
   * @param options
   */
  public constructor(options: Options) {

    this.options = options;
  
  }

  
  /**
   * someMethod
   * @private
   */
  private someMethod(): void {
    console.log('somme method')
  }
}
