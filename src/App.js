import { useState } from 'react';
import './App.css';
import IndexHome from './Components/Home/Index';
import IndexWelcome from './Components/Welcome/Index';

function App() {
  const [state, setState] = useState(false)

  return (
    <div>
      {state ? (<IndexHome setState={setState}/>) : (<IndexWelcome setState={setState}/>)}
    </div>
  );
}

export default App;
