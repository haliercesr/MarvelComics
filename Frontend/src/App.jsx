//Components
import Home from './views/home/home.component';
import Favourite from './views/favourite/favourite.component';
import Detailcomic from './views/detailcomic/detailcomic.component';
import SearchBar from './components/searchbar/searchbar.component';
import Landing from './views/landing/landing.component';
//Commons imports
import { Route, Routes, useLocation } from 'react-router-dom';
//Styles
import './App.css'

function App() {
  const location=useLocation()
  const nav=()=>{return location.pathname.includes('/favourite')?<SearchBar/>:null}
  
  return (
    <div className='app'>
       {nav()}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detailcomic/:id' element={<Detailcomic/>} />
        <Route path='/favourite' element={<Favourite />}/>
      </Routes>
    </div>
  )
}

export default App
