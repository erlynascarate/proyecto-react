import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoFound from './pages/NoFound'
import Home from './pages/Home'
import Cripto from './pages/Cripto'
import Grid from './components/Grid'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/criptomonedas' element={<App />}>
                <Route index element={<Grid />} />
                <Route path=':id' element={<Cripto />} />
            </Route>
            <Route path='*' element={<NoFound />} />
        </Routes>
    </BrowserRouter>
)
