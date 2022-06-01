import React, {useState} from 'react';
import {MyComponent} from '../../lib';



export default function App() {

  const [model, setModel] = useState<string>('initial text');
  const config: any = {
  };

  /**
   * handleModelChange
   * @param modelChanged
   */
  const handleModelChange = (modelChanged?: string): void => {
    if (modelChanged) {
      setModel(modelChanged);
    }
  };

  return (
    <MyComponent
      model={model}
      onModelChange={handleModelChange}
    />
  );
}
