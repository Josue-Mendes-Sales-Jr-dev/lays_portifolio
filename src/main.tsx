import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Introduction } from './pages/introduction'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/introducao' element={<Introduction/>}/>
  
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
