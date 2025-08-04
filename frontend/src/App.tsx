import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import { LandingPage } from './pages/Landing'

function App() {
    return(
    <>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
        </Routes>
    </>
    )
}

export default App
