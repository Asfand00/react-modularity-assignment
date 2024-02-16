import React from 'react';
import { Button } from './SharedComponents';

const ContentB = () => {
  return (
    <div>
      <h2>Content B</h2>
      <p>This is Content B</p>
      <Button onClick={() => console.log('Button in ContentB clicked')}>ContentB Button</Button>
    </div>
  );
};

export { ContentB };
