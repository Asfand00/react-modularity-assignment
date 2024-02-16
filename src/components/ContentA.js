import React from 'react';
import { Button } from './SharedComponents';

const ContentA = () => {
  return (
    <div>
      <h2>Content A</h2>
      <p>This is Content A</p>
      <Button onClick={() => console.log('Button in ContentA clicked')}>ContentA Button</Button>
    </div>
  );
};

export { ContentA };
