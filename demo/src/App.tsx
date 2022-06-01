import React, {useState} from 'react';
import {FroalaEditor} from '../../lib';

const key = '';

export default function App() {

  const [model, setModel] = useState<string>('initial text tito');
  const config: any = {
    key,
    placeholder: 'Edit Me',
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
    <FroalaEditor
      tag='textarea'
      config={config}
      model={model}
      onModelChange={handleModelChange}
    />
  );
}
