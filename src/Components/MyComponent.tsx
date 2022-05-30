import React, {createRef, FC, RefObject, useEffect} from 'react';


interface Options {
  
}

/**
 * MyComponent
 * @param props
 */
const MyComponent: FC<Options> = (props: Options): JSX.Element => {

  /** Component DOM ref */
  const compRef: RefObject<HTMLDivElement> = createRef();
  
  // update
  useEffect((): void => {
    if (compRef.current) {
      const el: HTMLElement = compRef.current;
      
    }
  });

  // unmount
  useEffect((): () => void => {
    // return a function to execute at unmount
    return (): void => {
      // destroy component
    };
  }, []);


  return <div ref={compRef} className='my-component' />;
};

export default MyComponent;
