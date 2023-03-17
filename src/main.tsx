import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Introduction } from './pages/introduction'
import { Demo02 } from './pages/demo02';
import { Demo03 } from './pages/demo03';
import { Demo04 } from './pages/demo04';
import { Demo05 } from './pages/demo05';
import { Demo06 } from './pages/demo06';
import { Demo07 } from './pages/demo07';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/introducao' element={<Introduction/>}/>
          <Route path='/tema02' element={<Demo02/>}/>
          <Route path='/tema03' element={<Demo03/>}/>
          <Route path='/tema04' element={<Demo04/>}/>
          <Route path='/tema05' element={<Demo05/>}/>
          <Route path='/tema06' element={<Demo06/>}/>
          <Route path='/tema07' element={<Demo07/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
