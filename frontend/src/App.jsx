import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ShopCategory from './pages/ShopCategory'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory/>}/>
          <Route path='/women' element={<ShopCategory/>}/>
          <Route path='/kids' element={<ShopCategory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
