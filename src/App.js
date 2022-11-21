import { useState } from 'react';
import './App.css';
import IndexHome from './Components/Home/Index';
import IndexWelcome from './Components/Welcome/Index';

function App() {
  const [renderPage, setRenderPage] = useState(false)

  return (
    <div>
      {renderPage ? (<IndexHome setRenderPage={setRenderPage}/>) : (<IndexWelcome setRenderPage={setRenderPage}/>)}
    </div>
  );
}

export default App;
