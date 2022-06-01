/* eslint-disable @typescript-eslint/member-ordering,@typescript-eslint/explicit-member-accessibility */
// noinspection JSUnusedGlobalSymbols

declare module 'MyComponent' {

    
    export class MyComponent {
      public constructor(element: any, options: any);
      $oel: JQuery;
      destroy(): object;
  
      opts: any;
      
    }
  
    export interface GenericObject<T = any> { [key: string]: T; }
  
   
  
    interface Apply<T> {
      apply(value: T): void;
    }
  
    
}
  