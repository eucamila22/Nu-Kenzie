import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const App = () => {
    const [renderPage, setRenderPage] = useState(false)

    return (
        <div className='app-home'>
            {renderPage ? (
                <Dashboard setRenderPage={setRenderPage} />
            ) : (
                <Home setRenderPage={setRenderPage} />
            )}
        </div>
    )
}

export default App
