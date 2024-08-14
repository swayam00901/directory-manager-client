import React, { useState } from 'react';
import { createDirectory, moveDirectory, deleteDirectory, listDirectories } from './services/api';

const App: React.FC = () => {
  const [output, setOutput] = useState<string>('');

  const handleCreate = async (path: string) => {
    const response = await createDirectory(path);
    setOutput(response.data);
  };

  const handleMove = async (src: string, dest: string) => {
    const response = await moveDirectory(src, dest);
    setOutput(response.data);
  };

  const handleDelete = async (path: string) => {
    const response = await deleteDirectory(path);
    setOutput(response.data);
  };

  const handleList = async () => {
    const response = await listDirectories();
    setOutput(response.data);
  };

  return (
    <div>
      <h1>Directory Manager</h1>
      <button onClick={() => handleCreate('fruits')}>Create fruits</button>
      <button onClick={() => handleCreate('vegetables')}>Create vegetables</button>
      <button onClick={() => handleCreate('grains')}>Create grains</button>
      <button onClick={() => handleCreate('fruits/apples')}>Create fruits/apples</button>
      <button onClick={() => handleCreate('fruits/apples/fuji')}>Create fruits/apples/fuji</button>
      <button onClick={handleList}>List</button>
      <button onClick={() => handleCreate('grains/squash')}>Create grains/squash</button>
      <button onClick={() => handleMove('grains/squash', 'vegetables')}>Move grains/squash to vegetables</button>
      <button onClick={() => handleCreate('foods')}>Create foods</button>
      <button onClick={() => handleMove('grains', 'foods')}>Move grains to foods</button>
      <button onClick={() => handleMove('fruits', 'foods')}>Move fruits to foods</button>
      <button onClick={() => handleMove('vegetables', 'foods')}>Move vegetables to foods</button>
      <button onClick={() => handleDelete('fruits/apples')}>Delete fruits/apples</button>
      <button onClick={() => handleDelete('foods/fruits/apples')}>Delete foods/fruits/apples</button>
      <pre>{output}</pre>
    </div>
  );
};

export default App;
